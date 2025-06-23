import { useState, useEffect, useRef } from "react";
import { fetchSuggestions, getForecastUrl } from "../utils/searchService";

const useSearch = (getWeatherDetails) => {
  const [searchText, setSearchText] = useState("Colombo");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const suggestionRefs = useRef([]);
  const searchInputRef = useRef(null);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedFetchSuggestions = debounce(async (query) => {
    const data = await fetchSuggestions(query);
    setSuggestions(data);
    setShowSuggestions(isTyping && data.length > 0);
    setActiveSuggestion(-1);
  }, 300);

  useEffect(() => {
    debouncedFetchSuggestions(searchText);
  }, [searchText, isTyping]);

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    getWeatherDetails(getForecastUrl(searchText));
    setShowSuggestions(false);
    setIsTyping(false);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = getForecastUrl(`${latitude},${longitude}`);
        getWeatherDetails(API_URL);
        setSearchText("my location");
        setShowSuggestions(false);
        setIsTyping(false);
      });
    } else {
      alert("Location access denied.");
    }
  };

  const handleSearchClick = () => {
    if (!searchText.trim()) return;
    getWeatherDetails(getForecastUrl(searchText));
    setShowSuggestions(false);
    setIsTyping(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setIsTyping(true);
  };

  const handleSuggestionClick = (suggestion) => {
    const locationName = `${suggestion.name}, ${suggestion.country}`;
    setSearchText(locationName);
    setShowSuggestions(false);
    setIsTyping(false);
    getWeatherDetails(getForecastUrl(locationName));
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        } else {
          handleCitySearch(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        setIsTyping(false);
        searchInputRef.current?.blur();
        break;
      default:
        setIsTyping(true);
    }
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    setIsTyping(false);
  };

  const handleInputFocus = () => {
    setIsTyping(false);
  };

  return {
    searchText,
    suggestions,
    showSuggestions,
    activeSuggestion,
    suggestionRefs,
    searchInputRef,
    handleCitySearch,
    handleLocationClick,
    handleSearchClick,
    handleInputChange,
    handleSuggestionClick,
    handleKeyDown,
    handleInputBlur,
    handleInputFocus,
  };
};

export default useSearch;

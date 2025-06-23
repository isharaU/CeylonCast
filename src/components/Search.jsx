import React, { useState, useEffect, useRef } from "react";
import "./Search.css";

const Search = ({ getWeatherDetails }) => {
  const [searchText, setSearchText] = useState("Colombo");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const suggestionRefs = useRef([]);
  const searchInputRef = useRef(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;
  const SEARCH_URL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=`;

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  // Fetch autocomplete suggestions
  const fetchSuggestions = async (query) => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const response = await fetch(`${SEARCH_URL}${encodeURIComponent(query)}`);
      const data = await response.json();
      setSuggestions(data || []);
      setShowSuggestions(isTyping && data && data.length > 0);
      setActiveSuggestion(-1);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Debounced version of fetchSuggestions
  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  useEffect(() => {
    debouncedFetchSuggestions(searchText);
  }, [searchText, isTyping]);

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    const API_URL = `${BASE_URL}${searchText}`;
    getWeatherDetails(API_URL);
    setShowSuggestions(false);
    setIsTyping(false);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `${BASE_URL}${latitude},${longitude}`;
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
    const API_URL = `${BASE_URL}${searchText}`;
    getWeatherDetails(API_URL);
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
    const API_URL = `${BASE_URL}${locationName}`;
    getWeatherDetails(API_URL);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion(prev => 
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
        // For any other key, set typing to true
        setIsTyping(true);
    }
  };

  const handleInputBlur = (e) => {
    // Hide suggestions immediately when input loses focus
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    setIsTyping(false);
  };

  const handleInputFocus = () => {
    // Don't show suggestions on focus, only when typing
    setIsTyping(false);
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <form className="search-form" onSubmit={handleCitySearch}>
          <span className="material-symbols-outlined search-icon">globe</span>
          <input
            ref={searchInputRef}
            type="search"
            className="search-input"
            placeholder="Search for a city..."
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            autoComplete="off"
          />
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map((suggestion, index) => (
              <div
                key={`${suggestion.id}-${index}`}
                ref={el => suggestionRefs.current[index] = el}
                className={`suggestion-item ${index === activeSuggestion ? 'suggestion-active' : ''}`}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setActiveSuggestion(index)}
              >
                <div className="suggestion-name">
                  {suggestion.name}
                </div>
                <div className="suggestion-location">
                  {suggestion.region && `${suggestion.region}, `}{suggestion.country}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="location-button" onClick={handleSearchClick}>
        <span className="material-symbols-outlined">search</span>
      </button>
      <button className="location-button" onClick={handleLocationClick}>
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
};

export default Search;
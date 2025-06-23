import React from "react";
import "./Search.css";
import useSearch from "../hooks/useSearch";

const Search = ({ getWeatherDetails }) => {
  const {
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
  } = useSearch(getWeatherDetails);

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
                ref={(el) => (suggestionRefs.current[index] = el)}
                className={`suggestion-item ${
                  index === activeSuggestion ? "suggestion-active" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setActiveSuggestion(index)}
              >
                <div className="suggestion-name">{suggestion.name}</div>
                <div className="suggestion-location">
                  {suggestion.region && `${suggestion.region}, `}
                  {suggestion.country}
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

import './NoResults.css';

const NoResults = () => {
  return (
    <div className="no-results-wrapper">
      <div className="no-results">
        <img
          src="/public/close.png"
          alt="No results found"
          className="no-results-image"
        />
        <h2 className="no-results-title">No results found</h2>
        <p className="no-results-description">
          Please try searching for a different city or check your internet connection.
        </p>
      </div>
    </div>
  );
};

export default NoResults;

import './NoResults.css';

const NoResults = () => {
  return (
    <div className="no-results-wrapper">
      <div className="no-results">
        <img
          src="/images/close.svg"
          alt="No results found"
          className="no-results-image"
        />
        <h2 className="no-results-title">No results found</h2>
        <p className="no-results-description">
          Please try searching for a different city!.
        </p>
      </div>
    </div>
  );
};

export default NoResults;

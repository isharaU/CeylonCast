import './NoResults.css';

const NoResults = () => {
  return (
    <>
      <div className="no-results">
        <img src={"./src/assets/close.png"} alt="No results found" className="no-results-image" />
      </div>
      <div className="no-results-text">
        <h2 className="no-results-title">No results found</h2>
        <p className="no-results-description">Please try searching for a different city or check your internet connection.</p>
      </div>
    </>
  );
};

export default NoResults;

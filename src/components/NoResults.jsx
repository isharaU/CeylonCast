const NoResults = () => {
  return (
    <>
      <div className="no-results-image">
        <img src={"./src/assets/close.png"} alt="No results found" />
      </div>
      <div className="no-results-text">
        <h2>No results found</h2>
        <p>Please try searching for a different city or check your internet connection.</p>
      </div>
    </>
  );
};

export default NoResults;

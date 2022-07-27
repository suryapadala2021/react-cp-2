const element = (
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="card-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="card-name">Kiran V</h1>
      <p className="card-para">
        Vishnu Instituation of Computer Education and Technology.
        <br />
        Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

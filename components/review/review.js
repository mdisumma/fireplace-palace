"use client";

import { useState, useEffect } from "react";

function Review() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
    )
      .then((response) => response.json())
      .then((data) => setCountryData(data));
    console.log(`This country is selected ${selectedCountry}`);
    console.log(countryData);
  }, [selectedCountry]);

  function clickHandler(value) {
    setSelectedCountry(value);
  }

  return (
    <>
      <section className="reviewContainer">
        <h2 className="reviewTitle"> Trusted </h2>
        <p className="reviewDesc">
          {" "}
          We've got thousends of happy customers all over the UK. Choose your
          country to see the latest review.
        </p>
        <div className="reviewButtonContainer">
          <button
            onClick={() => {
              clickHandler("England");
            }}
            className={`reviewButton ${
              selectedCountry === "England" ? "active" : ""
            }`}
          >
            {" "}
            England{" "}
          </button>
          <button
            onClick={() => {
              clickHandler("Wales");
            }}
            className={`reviewButton ${
              selectedCountry === "Wales" ? "active" : ""
            }`}
          >
            {" "}
            Wales{" "}
          </button>
          <button
            onClick={() => {
              clickHandler("Scotland");
            }}
            className={`reviewButton ${
              selectedCountry === "Scotland" ? "active" : ""
            }`}
          >
            {" "}
            Scotland{" "}
          </button>
        </div>
      </section>

      {selectedCountry && (
        <section className="conditionalContainer">
          <p className="conditionalText"> {countryData.text} </p>
          <p className="conditionalInfo">
            <span>{countryData.author}</span> <span> &nbsp; - &nbsp; </span>
            <span>{countryData.location}</span>
          </p>
        </section>
      )}
    </>
  );
}

export default Review;

"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState(false);
  const [postcode, setPostcode] = useState(false);
  const [addressNumber, setAddressNumber] = useState(false);
  const [cityName, setCityName] = useState(false);
  const [number, setNumber] = useState(false);
  const [email, setEmail] = useState(false);
  const [formValid, setFormValid] = useState(null);

  function handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);

switch (e.target.name) {
    case "fullName":
        setFullName(e.target.value);
        break;
    case "postcode":
        setPostcode(e.target.value);
        break;
    case "addressNumber":
        setAddressNumber(e.target.value);
        break;
    case "cityName":
        setCityName(e.target.value);
        break;
    case "phoneNumber":
        setNumber(e.target.value);
        break;
    case "emailAddress":
        setEmail(e.target.value);
        break;
    default:
        console.log("the field is empty");
        break;
}
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
          fullName &&
          postcode &&
          addressNumber &&
          cityName &&
          number &&
          email
        ) {
          console.log("all done!");
          setFormValid(true);
        } else {
          console.log("At least one of the fields is empty");
          setFormValid(false);
        };
        console.log(fullName, postcode, addressNumber, cityName, number, email)
  }

  return (
    <>
      <h2 className="designBooking-title">Design Booking</h2>
      <form className="designBooking-form">
        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">
            Personal Information:
          </legend>
          <div className="designBooking-container">
            <label className="designBooking-label">
              Full Name
              <input
                type="text"
                name="fullName"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
            <label className="designBooking-label">
              Postcode
              <input
                type="text"
                name="postcode"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
            <label className="designBooking-label">
              House/Flat Number and Street Name
              <input
                type="Text"
                name="addressNumber"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
            <label className="designBooking-label">
              City
              <input
                name="cityName"
                type="Text"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
          </div>
        </fieldset>
        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">Contact Information:</legend>
          <div className="designBooking-container">
            <label className="designBooking-label">
              Phone Number
              <input
                name="phoneNumber"
                type="number"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
            <label className="designBooking-label">
              Email Address
              <input
                name="emailAddress"
                type="email"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </label>
          </div>
        </fieldset>
        <button className="designBooking-button" type="submit" value="submit" onClick={handleSubmit}>
          Submit
        </button>
        {formValid === false && 
          (<p className="errorMessage">Error - At least one of the fields is empty</p>)
        }
      </form>
    </>
  );
}


    // if (e.target.name === "fullName") {
    //   setFullName(e.target.value);
    // } else if (e.target.name === "postcode") {
    //   setPostcode(e.target.value);
    // } else if (e.target.name === "addressNumber") {
    //   setAddressNumber(e.target.value);
    // } else if (e.target.name === "cityName") {
    //   setCityName(e.target.value);
    // } else if (e.target.name === "phoneNumber") {
    //   setNumber(e.target.value);
    // } else if (e.target.name === "emailAddress") {
    //   setEmail(e.target.value);
    // } else {
    //   console.log("the field is empty");
    // }

   //   
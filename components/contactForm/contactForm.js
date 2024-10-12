/* This is a test code - use contactFormReducer instead 

"use client";
import { useReducer, useState, useEffect } from "react";



const initialState = {
  data: {
    fullName: { value: "", isTouched: false, error: "" },
    postcode: { value: "", isTouched: false, error: "" },
    addressNumber: { value: "", isTouched: false, error: "" },
    cityName: { value: "", isTouched: false, error: "" },
    phoneNumber: { value: "", isTouched: false, error: "" },
    email: { value: "", isTouched: false, error: "" },
  },
  formError: false,
  status: "submit",
};

// Reducer function to handle state changes based on dispatched actions.
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state, // Copy the current state
        data: {
          ...state.data, // Copy the current data object
          [action.field]: {
            ...state.data[action.field], // Copy the specific field object (like fullName or postcode etc)
            value: action.value, // Update the value of the field above with the new value.
            isTouched: true, // Update the isTouched to TRUE
            error: action.error || "", // Update the error message (if needed?).
          },
        },
      };
    case "VALIDATE_FORM":
      return {
        ...state,
        data: action.errors, // Update the data object with errors the validation checks
        formError: action.formError, // Update the form error
      };
    case "SUBMIT_STATUS":
      return {
        ...state,
        status: "Submitting",
      };
    case "SUCCESS_STATUS":
      return {
        ...state,
        status: "Submitted",
      };
    case "ERROR_STATUS":
      return {
        ...state,
        status: "Failed to submit",
      };
    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function validateField(fieldName, value) {
    let error = "";
    // Error if the field is empty
    switch (fieldName) {
      case "fullName":
      case "postcode":
      case "addressNumber":
      case "cityName":
        if (!value) error = "This field cannot be empty.";
        break;
      // Error if the phone number is empty.
      case "phoneNumber":
        if (!value) {
          error = "Phone number is required.";
        } else if (value.length < 10 || value.length > 15) {
          error = "Phone number must be between 10 and 15 digits.";
        }
        break;
      // Error if the email is empty
      // Error if the email is invalid
      case "email":
        if (!value) {
          error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid.";
        }
        break;

      default:
        break;
    }

    return error;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const error = validateField(name, value); // Validate the field with the new inpit/ value
    dispatch({ type: "SET_FIELD_VALUE", field: name, value, error });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let formError = false;
    const errors = { ...state.data };

    Object.keys(errors).forEach((key) => {
      const error = validateField(key, errors[key].value); // Validate each field/input area
      if (error) formError = true; // If there's an error, set formError to true
      errors[key] = {
        ...errors[key], // Copy the current field object
        isTouched: true, // Mark the field isTouch to true
        error, // Update the error message.
      };
    });

    dispatch({ type: "VALIDATE_FORM", errors, formError });

    if (!formError) {
      console.log("Form submitted successfully:", state.data); // Proceed with form submission ???? maybe add a confirmation here
    } else {
      console.log("Form submission failed:", state.data);
    }
    // button status
    console.log("submitting");
    dispatch({
      type: "SUBMIT_STATUS",
    });

    setTimeout(() => {
      if (
        !state.data.fullName.value ||
        !state.data.postcode.value ||
        !state.data.addressNumber.value ||
        !state.data.cityName.value ||
        !state.data.phoneNumber.value ||
        !state.data.email.value
      ) {
        console.log("error");
        // we return a console log test if we receive an error
        dispatch({
          type: "ERROR_STATUS",
        });
      } else {
        console.log("success");
        dispatch({
          type: "SUCCESS_STATUS",
        });
      }
    }, 2000);
  }

  return (
    <>
      <h2 className="designBooking-title">Design Booking</h2>
      <form className="designBooking-form" onSubmit={handleSubmit}>
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
                value={state.data.fullName.value}
                onChange={handleChange}
              />
              {state.data.fullName.error && (
                <p className="errorMessage">{state.data.fullName.error}</p>
              )}
            </label>
            <label className="designBooking-label">
              Postcode
              <input
                type="text"
                name="postcode"
                value={state.data.postcode.value}
                onChange={handleChange}
              />
              {state.data.postcode.error && (
                <p className="errorMessage">{state.data.postcode.error}</p>
              )}
            </label>
            <label className="designBooking-label">
              House/Flat Number and Street Name
              <input
                type="text"
                name="addressNumber"
                value={state.data.addressNumber.value}
                onChange={handleChange}
              />
              {state.data.addressNumber.error && (
                <p className="errorMessage">{state.data.addressNumber.error}</p>
              )}
            </label>
            <label className="designBooking-label">
              City
              <input
                type="text"
                name="cityName"
                value={state.data.cityName.value}
                onChange={handleChange}
              />
              {state.data.cityName.error && (
                <p className="errorMessage">{state.data.cityName.error}</p>
              )}
            </label>
          </div>
        </fieldset>

        <fieldset className="designBooking-fieldset">
          <legend className="designBooking-legend">Contact Information:</legend>
          <div className="designBooking-container">
            <label className="designBooking-label">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                value={state.data.phoneNumber.value}
                onChange={handleChange}
              />
              {state.data.phoneNumber.error && (
                <p className="errorMessage">{state.data.phoneNumber.error}</p>
              )}
            </label>
            <label className="designBooking-label">
              Email Address
              <input
                type="email"
                name="email"
                value={state.data.email.value}
                onChange={handleChange}
              />
              {state.data.email.error && (
                <p className="errorMessage">{state.data.email.error}</p>
              )}
            </label>
          </div>
        </fieldset>

        <button className="designBooking-button" type="submit">
          {state.status}
        </button>
        {state.status === "Submitting" && <span>Submitting 🔄</span>}
        {state.status === "Submitted" && (
          <span className="pass">Submitted ✅</span>
        )}
        {state.status === "Failed to submit" && (
          <span className="fail">Failed to submit ❌</span>
        )}
      </form>
    </>
  );
}


*/
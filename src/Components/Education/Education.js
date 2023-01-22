import React, { useState } from "react";
import "./Education.css";

export default function Education() {
  const [educationState, setEducationState] = useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });
  const handlePositionChange = (e) => {
    setEducationState((prevState) => ({
      ...prevState,
      position: e.target.value,
    }));
  };
  const handleCompanyChange = (e) => {
    setEducationState((prevState) => ({
      ...prevState,
      company: e.target.value,
    }));
  };
  const handleCityChange = (e) => {
    setEducationState((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };
  const handleFromChange = (e) => {
    setEducationState((prevState) => ({
      ...prevState,
      from: e.target.value,
    }));
  };
  const handleToChange = (e) => {
    setEducationState((prevState) => ({
      ...prevState,
      to: e.target.value,
    }));
  };
  return (
    <div>
      <h2>Experience</h2>
      <div className="education">
        <input
          type="text"
          placeholder="Position"
          onChange={handlePositionChange}
          value={educationState.position}
        />
        <input
          type="text"
          placeholder="Company"
          onChange={handleCompanyChange}
          value={educationState.company}
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleCityChange}
          value={educationState.city}
        />
        <input
          type="text"
          placeholder="From"
          onChange={handleFromChange}
          value={educationState.from}
        />
        <input
          type="text"
          placeholder="To"
          onChange={handleToChange}
          value={educationState.to}
        />
      </div>
      <div className="educationButtons">
        <button className="deleteBut">Delete</button>
        <button className="addBut">Add</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [experienceState, setExperienceState] = useState({
    university: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  });
  const handleUniversityChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      university: e.target.value,
    }));
  };
  const handleCityChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };
  const handleDegreeChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      degree: e.target.value,
    }));
  };
  const handleSubjectChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      subject: e.target.value,
    }));
  };
  const handleFromChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      from: e.target.value,
    }));
  };
  const handleToChange = (e) => {
    setExperienceState((prevState) => ({
      ...prevState,
      to: e.target.value,
    }));
  };
  return (
    <div>
      <h2>Education</h2>
      <div className="experience">
        <input
          type="text"
          placeholder="University Name"
          onChange={handleUniversityChange}
          value={experienceState.university}
        />
        <input
          type="text"
          placeholder="City"
          onChange={handleCityChange}
          value={experienceState.city}
        />
        <input
          type="text"
          placeholder="Degree"
          onChange={handleDegreeChange}
          value={experienceState.degree}
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={handleSubjectChange}
          value={experienceState.subject}
        />
        <input
          type="text"
          placeholder="From"
          onChange={handleFromChange}
          value={experienceState.from}
        />
        <input
          type="text"
          placeholder="To"
          onChange={handleToChange}
          value={experienceState.to}
        />
      </div>
      <div className="experienceButtons">
        <button className="deleteBut">Delete</button>
        <button className="addBut">Add</button>
      </div>
    </div>
  );
}

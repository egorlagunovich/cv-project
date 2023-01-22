import React, { useState } from "react";
import "./PersInfo.css";

export default function PersInfo() {
  const [persInfoState, setPersInfoState] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    adress: "",
    phone: "",
    email: "",
    description: "",
  });
  const handleFirstNameChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      firstName: e.target.value,
    }));
  };
  const handleLastNameChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      lastName: e.target.value,
    }));
  };
  const handleTitleChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };
  const handlePhotoChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      photo: e.target.value,
    }));
  };
  const handleAdressChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      adress: e.target.value,
    }));
  };
  const handlePhoneChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  };
  const handleEmailChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };
  const handleDescriptionChange = (e) => {
    setPersInfoState((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };
  return (
    <div>
      <h2>Personal Information</h2>
      <div className="persInfo">
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstNameChange}
          value={persInfoState.firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handleLastNameChange}
          value={persInfoState.lastName}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
          value={persInfoState.title}
        />
        <input
          type="file"
          placeholder="Photo"
          onChange={handlePhotoChange}
          value={persInfoState.photo}
        />
        <input
          type="text"
          placeholder="Adress"
          onChange={handleAdressChange}
          value={persInfoState.adress}
        />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={handlePhoneChange}
          value={persInfoState.phone}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={persInfoState.email}
        />
        <textarea
          placeholder="Description"
          onChange={handleDescriptionChange}
          value={persInfoState.description}
        ></textarea>
      </div>
    </div>
  );
}

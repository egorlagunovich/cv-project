import React from "react";
import "./Resume.css";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import PersInfo from "./../PersonalInfo/PersInfo";
import Buttons from "../Buttons/Buttons";

export default function Resume() {
  return (
    <main className="resume">
      <PersInfo />
      <Education />
      <Experience />
      <Buttons />
    </main>
  );
}

import styles from "../styles/ContentSection.css";
import CVdata from "../Data/CVdata";
import { useState } from "react";

function ContentSection({ personalInfo, handleChange }) {
  return (
    <>
      <div className="PersonalDetails">
        <h1>Personal Details</h1>
        <form>
          <label htmlFor="fullName">Full name</label>
          <input
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            id="fullName"
            type="text"
            placeholder="Enter first and last name"
            value={personalInfo.fullName}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            id="email"
            type="e-mail"
            placeholder="Enter e-mail address"
            value={personalInfo.email}
          ></input>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            id="phoneNumber"
            type="tel"
            placeholder="Enter your telephone number"
            value={personalInfo.phoneNumber}
          ></input>
          <label htmlFor="homeAddress">Full address</label>
          <input
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            id="homeAddress"
            type="textArea"
            placeholder="Enter your home address"
            value={personalInfo.homeAddress}
          ></input>
          <label htmlFor="personalDescription">Profile description</label>
          <textarea
            onChange={(e) => handleChange(e.target.value, e.target.id)}
            id="personalDescription"
            rows="4"
            cols="50"
            placeholder="Enter a description about yourself"
            value={personalInfo.personalDescription}
          ></textarea>
        </form>
      </div>
    </>
  );
}

export default ContentSection;

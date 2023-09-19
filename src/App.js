import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First name:
        {isEditing ? (
          <input
            id="firstNameInput"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        ) : (
          <b id="firstNameText"> {firstName}</b>
        )}
      </label>
      <label>
        Last name:
        {isEditing ? (
          <input
            id="lastNameInput"
            value={lastName}
            onChange={handleLastNameChange}
          />
        ) : (
          <b id="lastNameText"> {lastName}</b>
        )}
      </label>
      <button type="submit" id="editButton">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        <i id="helloText">
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}

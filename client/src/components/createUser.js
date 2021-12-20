/* eslint-disable no-undef */
import * as React from "react";

import "./layout.css";
import Layout from "./layout";

const AddUserPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log(username);
    console.log(givenName);
    console.log(surname);
    console.log(dob);

    fetch("http://localhost:9000/users/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        surname: surname,
        givenName: givenName,
        dateofbirth: dob,
      }),
    });
    // post to the backend, submit the data. content-type: application/x-www-urlencoded-form
  };
  const handleChange = (event) => {
    if (Object.keys(setters).includes(event.target.name)) {
      setters[event.target.name](event.target.value);
    } else {
      // TODO: error
      console.log(event.target);
    }
  };

  const [username, setUsername] = React.useState("");
  const [givenName, setGivenName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [dob, setDob] = React.useState("2021-12-19T21:21:41.457Z");

  const setters = {
    username: setUsername,
    givenName: setGivenName,
    surname: setSurname,
    dob: setDob,
  };
  return (
    <div className="App">
      <Layout pageTitle="New User" pageHeading="Add New User">
        This is the Add New User Page.
      </Layout>
      <form onSubmit={handleSubmit}>
        <label className="container">
          Username:
          <input
            type="text"
            value={username}
            onChange={handleChange}
            name="username"
          />
        </label>
        <label className="container">
          First Name:
          <input
            type="text"
            value={givenName}
            onChange={handleChange}
            name="givenName"
          />
        </label>
        <label className="container">
          Last Name:
          <input
            type="text"
            value={surname}
            onChange={handleChange}
            name="surname"
          />
        </label>
        <label className="container">
          Date of Birth:
          <input type="text" value={dob} onChange={handleChange} name="dob" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUserPage;

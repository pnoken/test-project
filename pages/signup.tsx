import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = {
    first_name: firstName,
    last_name: lastName,
    username: userName,
    password: password,
    age: age,
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
  };

  const submit = async () => {
    fetch("http://localhost:3001/users/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    router.push("/login");
  };

  return (
    <Layout title={"Sign Up"}>
    <div>
      <div className="container">
        <br />
        <div className="jumbotron">
          <h1 className="display-4">Sign Up</h1>
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br />
          <button type="submit" id="send" className="btn btn-success" onClick={submit}>
            Sign Up
          </button>
        </div>
        <br />
        <div id="messages"></div>
      </div>
    </div>
    </Layout>
  );
}

export default signup;

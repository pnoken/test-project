import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

function login() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState<any>([])

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = {
    username: userName,
    password: password,
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(raw),
  };

  const submit = async () => {
    fetch("http://localhost:3001/users/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {setAuth(result), console.log(result)})
      .catch((error) => console.log("error", error));

      window.localStorage.setItem("auth", JSON.stringify(auth))
    alert("Login successful")
    if (auth.role != "admin"){
      router.push("/meal");
    } else {
      router.push("/admin");
    }
    
  };
  
  return (
    <div>
      <Layout title="Login">
        <div>
          <form className="container" onSubmit={submit}>
            <br />
            <div className="jumbotron">
              <h1 className="display-4">Login</h1>
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
              <button type="submit" id="send" className="btn btn-success">
                Login
              </button>
              <br />
              <p>
                Haven't signed up yet? {""}
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </p>
            </div>
            <br />
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default login;

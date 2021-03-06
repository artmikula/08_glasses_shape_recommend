import React from "react";
import userIcon from "./user_icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ error, setError, setUser, userAdded }) {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  let pwdCheck = null;

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser();
  };

  async function loginUser() {
    setError("");
    if (loginInfo.password && loginInfo.username) {
      await checkPassword();
      if (loginInfo.password === pwdCheck) {
        setUser({
          username: loginInfo.username,
        });
        setError(null);
        navigate("/view1");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkPassword() {
    await axios.get(`/server/users/${loginInfo.username}`).then((response) => {
      if (response.data.length > 0) {
        pwdCheck = response.data[0].password;
      } else {
        setError("Wrong password");
      }
    });
  }

  return (
    <div className="login">
      <form id="loginform" autoComplete="off">
        {error !== "" ? <div className="error">{error}</div> : ""}
        {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, username: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
        <div className="buttons">
          <input
            className="button2"
            type="button"
            value="?????????"
            onClick={(e) => loginHandler(e)}
          />
          <input
            className="button2"
            type="button"
            value="????????????"
            onClick={(e) => signUpUser(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;

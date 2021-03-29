import React, { useState } from "react";
import axios from "axios";

const projectID = "cfdcdb68-6c9b-4aee-ab26-f43e277e4cb1";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          ></input>
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <small>*Use username for checking out: sample</small>
            <br></br>
            <small>*Use password for checking out: 123123</small>
          </div>
          <h1 className="error">{error}</h1>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

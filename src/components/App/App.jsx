import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "../ChatFeed/ChatFeed";
import LoginForm from "../LoginForm/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="cfdcdb68-6c9b-4aee-ab26-f43e277e4cb1"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}></ChatFeed>}
    ></ChatEngine>
  );
}

export default App;

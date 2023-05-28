import React from "react";
import { Routes, Route } from "react-router-dom";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route
          path="/chatbot"
          exact
          element={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          }
        />
        <Route path="/welcome" exact element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;

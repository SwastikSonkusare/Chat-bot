import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./components/Options/Options";
import AgeDropdownWidget from "./components/AgeDropDown";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "options",
    }),
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props) => <AgeDropdownWidget {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;

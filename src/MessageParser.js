import React from "react";

const MessageParser = ({ children, actions }) => {
  const handleAgeInput = (age) => {
    if (age >= 18 && age <= 40) {
      actions.handleValidAge(age);
    } else {
      actions.handleInvalidAge();
    }
  };

  const parse = (message) => {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("got it")) {
      actions.handleHello();
    }

    if (!lowercase.includes("got it")) {
      actions.showAgeDropdown(handleAgeInput, lowercase);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          handleAgeInput: handleAgeInput,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
// class MessageParser {
//   state = {};
//   constructor(actionProvider, state) {
//     this.state = state;
//     this.actionProvider = actionProvider;
//   }

//   parse = (message) => {
//     console.log("current message" + message);
//     console.log("state data", this.state);
//   };
// }

// export default MessageParser;

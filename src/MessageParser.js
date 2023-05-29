import React from "react";

const MessageParser = ({ children, actions }) => {
  const handleAgeInput = (age) => {
    if (age >= 18 && age <= 40) {
      actions.handleValidAge(age);
    } else {
      actions.handleInvalidAge();
    }
  };

  const greet = () => {
    actions.handleGreet();
    parse("got it");
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
          actions: {
            greet,
            parse,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;

import React from "react";

import { createClientMessage } from "react-chatbot-kit";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setName, setAge } from "./action";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHello = () => {
    const botMessage = createChatBotMessage("Enter your name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleValidAge = (age) => {
    const message = createClientMessage(age);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    dispatch(setAge(age));

    handleCountDown();
  };

  const handleCountDown = () => {
    const message = createChatBotMessage("Thank you");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    const countDownDuration = 5;
    let currentCount = countDownDuration;

    const countdownInterval = setInterval(() => {
      const message = createChatBotMessage(`${currentCount} seconds...`);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));

      currentCount--;

      if (currentCount < 0) {
        clearInterval(countdownInterval);
        navigateToWelcomePage();
      }
    }, 1000);
  };

  const navigateToWelcomePage = () => {
    navigate("/welcome");
  };

  const handleInvalidAge = () => {
    const message = createChatBotMessage(
      "Please select an age between 18 and 40."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const greet = () => {
    const message = createClientMessage("Enter your age", {
      widget: "options",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const showAgeDropdown = (handleAgeInput, lowercase) => {
    const message = createChatBotMessage("Enter your age", {
      widget: "ageDropdown",
      props: handleAgeInput,
    });

    dispatch(setName(lowercase));

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleInvalidAge,
            handleValidAge,
            handleCountDown,
            showAgeDropdown,
            navigateToWelcomePage,
            greet,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

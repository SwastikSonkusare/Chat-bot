import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="welcome container">
      <h1>
        Your name {name} aged {age} has been added to student system. You may
        now exit.
      </h1>
      <button onClick={handleRedirect}> Exit</button>
    </div>
  );
};

export default Welcome;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <div className="container">
      <h1>Enter into Student Info System</h1>
      <button onClick={handleClick}>Enroll now</button>
    </div>
  );
};

export default Home;

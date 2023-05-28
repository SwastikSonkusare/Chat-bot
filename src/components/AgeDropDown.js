const AgeDropdownWidget = (props) => {
  const ageOptions = Array.from({ length: 23 }, (_, i) => 18 + i);

  const handleAgeInput =
    props.state.messages[props.state.messages.length - 1].props;

  const handleChange = (event) => {
    const selectedAge = parseInt(event.target.value);

    handleAgeInput(selectedAge);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select Age</option>
      {ageOptions.map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
  );
};

export default AgeDropdownWidget;

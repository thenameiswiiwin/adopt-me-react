const Animal = ({ text, animal, onChange, ANIMALS }) => {
  return (
    <label htmlFor={text}>
      Animal
      <select id={text} value={animal} onChange={onChange} onBlur={onChange}>
        <option />
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Animal;

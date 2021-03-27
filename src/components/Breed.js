const Breed = ({ text, breed, breeds, onChange }) => {
  return (
    <label htmlFor={text}>
      Breed
      <select
        disabled={!breeds.length}
        id={text}
        value={breed}
        onChange={onChange}
        onBlur={onChange}
      >
        <option />
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Breed;

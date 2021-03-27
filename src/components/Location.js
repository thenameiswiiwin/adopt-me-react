const Location = ({ text, location, onChange }) => {
  return (
    <label htmlFor={text}>
      Location
      <input
        id={text}
        value={location}
        placeholder={text}
        onChange={onChange}
      />
    </label>
  );
};

export default Location;

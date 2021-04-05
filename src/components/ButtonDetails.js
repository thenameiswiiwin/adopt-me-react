const ButtonDetails = ({ themeHook, name }) => {
  return <button style={{ backgroundColor: themeHook }}>Adopt {name}</button>;
};

export default ButtonDetails;

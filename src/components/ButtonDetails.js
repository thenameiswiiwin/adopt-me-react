const ButtonDetails = ({ name, themeHook, onClick }) => {
  return (
    <button style={{ backgroundColor: themeHook }} onClick={onClick}>
      Adopt {name}
    </button>
  );
};

export default ButtonDetails;

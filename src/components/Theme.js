const Theme = ({ text, themeHook, onChange, COLORS }) => {
  return (
    <label htmlFor={text}>
      Theme
      <select value={themeHook} onChange={onChange} onBlur={onChange}>
        <option value={COLORS[0]}>Maroon</option>
        <option value={COLORS[1]}>Charcoal</option>
        <option value={COLORS[2]}>Dark Green</option>
        <option value={COLORS[3]}>Dark Blue</option>
        <option value={COLORS[4]}>Peru</option>
        <option value={COLORS[5]}>Chartreuse</option>
        <option value={COLORS[6]}>Medium Orchid</option>
      </select>
    </label>
  );
};

export default Theme;

import "./style.scss";

const Input = ({ placeholder, title, value, setValue }) => {
  return (
    <div className="input-contianer">
      <label>{title}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

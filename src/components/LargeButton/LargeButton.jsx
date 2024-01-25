import "./style.scss";

const LargeButton = ({ text = "Button", ...props }) => {
  return (
    <button {...props} className="large-btn-container">
      {text}
    </button>
  );
};

export default LargeButton;

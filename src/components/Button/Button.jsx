import "./style.scss";

const Button = ({ text = "Button" }) => {
  return <button className="btn-container">{text}</button>;
};

export default Button;

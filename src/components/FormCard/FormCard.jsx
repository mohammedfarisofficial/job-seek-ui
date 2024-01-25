import LargeButton from "../LargeButton/LargeButton";
import "./style.scss";

const FormCard = ({ children, onSumbit }) => {
  return (
    <div className="formcard-container">
      <h2>Post a Job</h2>
      <p>please enter job details below...</p>
      {children}
      <LargeButton onClick={onSumbit} text="Post Job" />
    </div>
  );
};

export default FormCard;

import "./style.scss";
import { adobeLogo } from "../../constants/images";
import { SaveIcon } from "../../constants/icons";
import Button from "../Button/Button";

const JobCard = ({
  id,
  companyIcon,
  jobTitle,
  company,
  postedBy,
  desc,
  tags,
  days,
  applicants,
  location,
  salary,
}) => {
  return (
    <div className="jobcard-container">
      <div className="jobcard-header">
        <div className="company-logo">
          <img src={companyIcon} alt="company" />
        </div>
        <div className="header-content">
          <h5>{jobTitle}</h5>
          <p>
            {company} • {location}
          </p>
        </div>
        <img className="save-btn" src={SaveIcon} alt="" />
      </div>
      <p className="jobcard-caption">{desc}</p>
      <div className="jobcard-tags">
        {tags.length !== 0 &&
          tags.map((tag) => (
            <div>
              <p>{tag}</p>
            </div>
          ))}
      </div>
      <p className="jobcard-caption">
        {days} days ego • {applicants} Applicants
      </p>
      <div className="jobcard-bottom">
        <h3>
          ${salary}
          <span>/m</span>
        </h3>
        <Button text="Apply Now" />
      </div>
    </div>
  );
};

export default JobCard;

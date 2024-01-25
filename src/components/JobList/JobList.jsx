import { jobsList } from "../../constants/jobs";
import JobCard from "../JobCard/JobCard";
import "./style.scss";

const JobList = () => {
  return (
    <div className="joblist-container">
      {jobsList.map((job) => (
        <JobCard {...job} />
      ))}
    </div>
  );
};

export default JobList;

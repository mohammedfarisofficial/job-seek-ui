import { useState } from "react";
import FormCard from "../../components/FormCard/FormCard";
import Input from "../../components/Input/Input";
import Layout from "../../layout/Layout";
import "./style.scss";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [salary, setSalary] = useState("");

  const handlePost = () => {
    const formData = {
      title,
      company,
      location,
      tags,
      salary,
    };
    console.log("form data =====", formData);
  };

  return (
    <Layout>
      <div className="postjob-container">
        <FormCard onSumbit={handlePost}>
          <Input
            value={title}
            setValue={setTitle}
            placeholder="Enter job Title..."
            title="Enter Title"
          />
          <Input
            value={company}
            setValue={setCompany}
            placeholder="Enter company name..."
            title="Enter Company"
          />
          <Input
            value={location}
            setValue={setLocation}
            placeholder="Enter job location..."
            title="Enter Location"
          />
          <Input
            value={tags}
            setValue={setTags}
            placeholder="Enter job tags..."
            title="Enter Tags"
          />
          <Input
            value={salary}
            setValue={setSalary}
            placeholder="Enter salary..."
            title="Salary/m"
          />
        </FormCard>
      </div>
    </Layout>
  );
};

export default PostJob;

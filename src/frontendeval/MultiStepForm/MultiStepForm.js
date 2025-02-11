import React, { useState } from "react";
import "../../styles/MultiStepFormStyle.css";
import UserForm from "./UserForm";
import FormsDetails from "./FormsDetails";

const MultiStepForm = () => {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonType: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonType: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonType: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonType: "Submit",
      placeholder: "",
    },
  ];
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
  const [formsData, setFormsData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIisFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("form submitted");
      setIisFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    //console.log(id, value);
    const copyFormsData = { ...formsData };
    copyFormsData[id] = val;
    setFormsData(copyFormsData);
  };

  return (
    <div className="main-container">
      {!isFormSubmitted ? (
        <UserForm
          handleSubmit={handleSubmit}
          index={index}
          handleBack={handleBack}
          forms={forms}
          formsData={formsData}
          handleInputChange={handleInputChange}
        />
      ) : (
        <div>
          <FormsDetails formsData={formsData} />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;

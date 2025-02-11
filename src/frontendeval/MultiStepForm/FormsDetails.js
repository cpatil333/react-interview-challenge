import React from "react";

const FormsDetails = (props) => {
  const { formsData } = props;

  return (
    <div>
      <h1>Success</h1>
      <hr />
      <span>Name : {formsData.name}</span>
      <br />
      <span>email : {formsData.email}</span>
      <br />
      <span>DOB : {formsData.dob}</span>
      <br />
      <span>Password : {formsData.password}</span>
      <br />
    </div>
  );
};

export default FormsDetails;

import React from "react";

const UserForm = (props) => {
  const {
    handleSubmit,
    index,
    handleBack,
    forms,
    formsData,
    handleInputChange,
  } = props;

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        {index > 0 && (
          <a href="/" onClick={handleBack}>
            Back
          </a>
        )}

        <label>{forms[index].label}</label>
        <input
          required
          onChange={handleInputChange}
          id={forms[index].id}
          value={formsData[forms[index].id]}
          type={forms[index].inputType}
          placeholder={forms[index].placeholder}
        />
        <button>{forms[index].buttonType}</button>
      </form>
    </div>
  );
};

export default UserForm;

import React, { useState } from "react";

const RegistrationForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(input);
    if (validateForm()) {
      console.log("Form submitted successfully ", input);
    }
  };

  const validateForm = () => {
    var isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    //check Alphabetic characters for Name
    if (input.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\submitted]+$/.test(input.name)) {
      newErrors.name = "Name should be Alphabetic characters";
      isValid = false;
    }

    //check Valid Email
    if (input.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    //check Valid password
    if (input.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (input.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  return (
    <div>
      <h1>Registered Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "5px" }}>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

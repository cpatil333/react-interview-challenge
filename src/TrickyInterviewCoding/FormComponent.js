import React from "react";

const FormComponent = () => {
  const [formsData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false,
  });
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formsData,
      [name]: name === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://example.com/api/contact", {
        method: "POST",
        body: JSON.stringify(formsData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error form submitted");
      }
      setFormData({
        name: "",
        email: "",
        message: "",
        checkbox: false,
      });
      setSubmitForm(true);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="App">
      <h1>User Forms</h1>
      <form onSubmit={handleSubmit}>
        <div className="InputDiv">
          <label>Name : </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formsData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputDiv">
          <label>Email : </label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={formsData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="InputDiv">
          <label>Message : </label>
          <textarea
            type=""
            placeholder="Message"
            id="message"
            name="message"
            value={formsData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="InputDiv">
          <label>Term</label>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={formsData.checkbox}
            onChange={handleInputChange}
          />
        </div>
        {error && <div>{error}</div>}
        {submitting ? (
          <div>Submitting...</div>
        ) : submitForm ? (
          <div>Form submitted successfully!</div>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default FormComponent;

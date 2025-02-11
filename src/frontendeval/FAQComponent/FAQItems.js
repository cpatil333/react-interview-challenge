import React, { useEffect, useState } from "react";

const FAQItems = ({ faqs, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <div className="faq-box">
      <div className="que" onClick={handleClick}>
        <button className={isShow ? "arrow" : ""}>></button>
        <div>{faqs.question}</div>
      </div>
      {isShow && <div className="ans">{faqs.answer}</div>}
    </div>
  );
};

export default FAQItems;

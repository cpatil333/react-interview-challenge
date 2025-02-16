import React, { useEffect, useState } from "react";

const Tabs = (props) => {
  const { children } = props;
  const[tabsHeaders,setTabHeaders] = useState([]);

  useEffect(() => {
    const headers = [];
    React.Children.forEach(children, (element) => {
      //console.log("Children ", children);
      const {title} = element.props
      headers.push(title)
    });
    console.log(headers);
    setTabHeaders(headers);
    //console.log(children);
  }, [props, children]);
  return <div>hello</div>;
};

export default Tabs;

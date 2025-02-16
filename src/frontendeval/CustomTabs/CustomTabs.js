import React from "react";
import Tabs from "./Tabs";

const CustomTabs = () => {
  return (
    <div>
      <h1>Custome Tabs</h1>
      <Tabs>
        <div title="home">Tab content for Home</div>
        <div title="about">Tab content for About</div>
        <div title="contact">Tab content for Contact</div>
      </Tabs>
    </div>
  );
};

export default CustomTabs;

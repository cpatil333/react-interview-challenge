import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import React from "react";

const fetchItems = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//delay function
const debounce = (func, delay) => {
  if (typeof func !== "function") {
    throw new Error(`Not a valid func ${func}`);
  }
  if (typeof delay !== "number" || delay < 0) {
    throw new Error(`Not a valid delay ${delay}`);
  }
  let timeout;
  return (...args) => {
    return new Promise((resolve) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(async () => {
        const data = await func(...args);
        resolve(data);
      }, delay);
    });
  };
};
const debouceQuery = debounce(fetchItems,  1000)
export default debouceQuery;

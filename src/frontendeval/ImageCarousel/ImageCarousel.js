import React, { useDebugValue, useEffect, useState } from "react";
import "../../styles/ImageCarousel.css";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  //calling url for fetch data
  const fetchImages = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    //console.log(data);
    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);
    //console.log(list);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 1000);
    return () => {
      clearInterval(tid);
    };
  }, [index]);

  const handleClick = (dir) => {
    console.log("curr index", index);
    const lastIndex = images.length - 1;
    if (dir === "left") {
      if (index === 0) {
        console.log("last index", lastIndex);
        setIndex(lastIndex);
      } else {
        setIndex((idx) => idx - 1);
      }
    } else if (dir === "right") {
      if (lastIndex === index) {
        setIndex(0);
      } else {
        setIndex((idx) => idx + 1);
      }
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <button onClick={() => handleClick("left")}>{"<"}</button>
          <img src={images[index]} alt="not found" />
          <button className="right" onClick={() => handleClick("right")}>
            {">"}
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default ImageCarousel;

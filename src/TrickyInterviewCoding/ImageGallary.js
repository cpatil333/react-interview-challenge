import React, { useEffect, useState } from "react";
import "../TrickyInterviewCoding/ImageGallary.css";

const ImageGallary = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState(null);

  useEffect(() => {
    const fetchImgages = [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/400",
      "https://picsum.photos/200/500",
    ];
    setImages(fetchImgages);
  }, []);

  return (
    <div>
      <h2>Image Gallary</h2>
      <div className="gallary">
        {images.map((img, index) => (
          <div
            key={index}
            className="imagecontainer"
            onClick={() => setSelectedImages(img)}
          >
            <img src={img} alt="view image" className="images" />
          </div>
        ))}
        {selectedImages && (
          <div className="model">
            <div
              className="model-container"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="closeButton"
                onClick={() => setSelectedImages(null)}
              >
                X
              </span>
              <img
                src={selectedImages}
                alt="view large"
                className="imagesModel"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallary;

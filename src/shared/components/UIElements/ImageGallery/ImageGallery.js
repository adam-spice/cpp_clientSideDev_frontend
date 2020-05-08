import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="flex flex-col mr-4 ">
      <img
        src={`${process.env.REACT_APP_ASSET_URL}${images[selectedImageIndex].url}`}
        alt=""
        className="border border-black "
      />
      <div className="mt-4">
        <div className="flex -mx-2">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                className="w-1/2 px-2"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={`${process.env.REACT_APP_ASSET_URL}${image.formats.thumbnail.url}`}
                  className="border border-black"
                  alt=""
                  style={{
                    height: image.formats.thumbnail.height,
                    width: image.formats.thumbnail.width,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

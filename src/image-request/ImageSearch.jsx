import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSearch = ({ current, blob, urlArr, setUrlArr }) => {
  const apiKey = 'qSzMCedWrSstW0PhIwfvY72moOSWQfMgWPT9bxHTcxkyCuUiZM4rTA1i';

  useEffect(() => {
    const fetchImages = async () => {
      const newUrlArr = [...urlArr];

      for (let i = 0; i < 3; i++) {
        try {
          const response = await axios.get(
            `https://api.pexels.com/v1/search?query=${blob[current + i].en}&per_page=1`,
            {
              headers: {
                Authorization: apiKey,
              },
            }
          );
          newUrlArr[current + i] = response.data.photos[0].src.large;
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }

      setUrlArr(newUrlArr);
    };

    if (blob.length > current + 2 && !urlArr[current + 2]) {
      fetchImages();
    }
  }, [current, blob, urlArr]);


  return (
    <div className="font-sans grid grid-cols-1 content-center">
      <div className="content-center">
        <h3 className="mb-2 text-gray-600">Source: Pexel</h3>
        {urlArr[current] && ( // Display image when it's available
          <div className="w-[25vw] h-[25vw] mb-2 relative">
            <img
              src={urlArr[current]}
              alt="Searched"
              className="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSearch;

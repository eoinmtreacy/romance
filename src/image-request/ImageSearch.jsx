import React, { useState } from "react";
import axios from "axios";

const ImageSearch = ({current, blob}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [urlArray, setUrlArray] = useState([])

  const prompt = blob[current].en

  const handleSearch = async () => {
    const apiKey = 'qSzMCedWrSstW0PhIwfvY72moOSWQfMgWPT9bxHTcxkyCuUiZM4rTA1i';
    const apiUrl = `https://api.pexels.com/v1/search?query=${prompt}&per_page=1`;

    try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: apiKey,
          },
        });
  
        const imageLink = response.data.photos[0].src.large;
        setImageUrl(imageLink);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

  handleSearch();

  return (
    <div>
      <h3>Plexel</h3>
      {imageUrl && <img className="logo" src={imageUrl} alt="Searched" />}
    </div>
  );
};

export default ImageSearch;
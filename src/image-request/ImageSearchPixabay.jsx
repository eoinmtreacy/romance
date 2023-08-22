// src/components/ImageSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = ({prompt}) => {
  const [imageURL, setImageURL] = useState('');

  const handleSearch = async () => {
    const apiKey = '38946832-b88d3db1439f74c5b4d13cfec';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${prompt}&image_type=photo`;

    try {
      const response = await axios.get(apiUrl);
      if (response.data.hits.length > 0) {
        setImageURL(response.data.hits[0].webformatURL);
      } else {
        setImageURL('');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  handleSearch()

  return (
    <div>
      <h3>Pixabay</h3>
      {imageURL && <img className="logo" src={imageURL} alt="Searched" />}
    </div>
  );
};

export default ImageSearch;

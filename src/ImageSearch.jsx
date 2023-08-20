import React, { useState } from "react";
import axios from "axios";

const ImageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSearch = async () => {
    const apiKey = '38946832-b88d3db1439f74c5b4d13cfec';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo`;

    try {
      const response = await axios.get(apiUrl);
      const imageLink = response.data.hits[0].largeImageURL;
      setImageUrl(imageLink);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {imageUrl && <img className="logo" src={imageUrl} alt="Searched" />}
    </div>
  );
};

export default ImageSearch;
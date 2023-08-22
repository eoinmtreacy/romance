import React, { useState } from 'react';
import axios from 'axios';

const ImageSearchShutterstock = ({prompt}) => {
  const [image, setImage] = useState(null);

  const apiKey = 'JzDp5aKR3X25XVvTi8ssWdY1lxG1eAaT';
  const apiUrl = `https://api.shutterstock.com/v1/images/search?query=${prompt}&per_page=1`;

  const handleSearch = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'User-Agent': 'Romance Quiz',
        },
      });
      if (response.data.data.length > 0) {
        setImage(response.data.data[0]);
      } else {
        setImage(null);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  handleSearch()

  return (
    <div>
      <h3>Shutterstock</h3>
      {image && (
        <div>
          <img
            src={image.assets.preview.url}
            alt={image.description}
            style={{ maxWidth: '300px', margin: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSearchShutterstock;

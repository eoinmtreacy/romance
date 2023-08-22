import React, { useState } from 'react';
import axios from 'axios';

const ImageSearchFlickr = ({prompt}) => {
  const [firstImage, setFirstImage] = useState('');

  const handleSearch = async () => {
    const apiKey = 'e361234bc5aeae4aeefe6614106340b7';
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${prompt}&format=json&nojsoncallback=1`;

    try {
      const response = await axios.get(apiUrl);
      const firstPhoto = response.data.photos.photo[0];
      if (firstPhoto) {
        const imageUrl = `https://farm${firstPhoto.farm}.staticflickr.com/${firstPhoto.server}/${firstPhoto.id}_${firstPhoto.secret}.jpg`;
        setFirstImage(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  handleSearch()

  return (
    <div>
        <h3>Flickr</h3>
      {firstImage && <img className="logo" src={firstImage} alt="Searched" />}
    </div>
  );
};

export default ImageSearchFlickr;

import React, { useState } from "react";
import axios from "axios";

const ImageSearch = ({current, blob}) => {
  const [urlArr, setUrlArr] = useState([])

  const apiKey = 'qSzMCedWrSstW0PhIwfvY72moOSWQfMgWPT9bxHTcxkyCuUiZM4rTA1i';

  let urls = [];

  for (let i = 0; i < 2; i++) {
    let url =
      "https://api.pexels.com/v1/search?query=" + blob[i].en + "&per_page=1";
    urls.push(url);
  }

  if (urlArr.length === current) {
    const requests = urls.map((url) =>
      axios.get(url, {
        headers: {
          Authorization: apiKey
        }
      })
    );

    let reqArr = [];

    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        reqArr.push(resp.data.photos[0].src.large);
      }, setUrlArr(reqArr));
    });
  }

  if (current + 2 > urlArr.length) {
    let url =
      "https://api.pexels.com/v1/search?query=" +
      blob[current + 1].en +
      "&per_page=1";
    const request = axios.get(url, {
      headers: {
        Authorization: apiKey
      }
    });
    request.then((resp) => {
      let reqArr = [...urlArr];
      reqArr.push(resp.data.photos[0].src.large);
      setUrlArr(reqArr);
      console.log(reqArr);
    });
  }

  //setImageUrl(urlArr[current])

  return (
    <div>
      <h3>Source: Pexel</h3>
      {<img className="logo" src={urlArr[current]} alt="Searched" />}
    </div>
  );
};

export default ImageSearch;
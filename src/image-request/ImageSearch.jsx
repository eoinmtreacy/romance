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

  return (
<div className="font-sans grid grid-cols-1 content-center">
  <div className="content-center">
    <h3 className="mb-2 text-gray-600">Source: Pexel</h3>
    <div className="w-[25vw] h-[25vw] mb-2 relative">
      <img
        src={urlArr[current]}
        alt="Searched"
        className="w-full h-full rounded-lg object-cover object-center"
      />
    </div>
  </div>
</div>

  );
};

export default ImageSearch;
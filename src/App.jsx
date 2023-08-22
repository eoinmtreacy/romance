import { useState } from 'react'
import { food } from "./vocab-lists/food.js";
import Tile from "./Tile.jsx";
import NavButton from "./NavButton.jsx";
import { shuffler } from "./tools/shuffler.js";
import ImageSearch from "./image-request/ImageSearch.jsx";
//import ImageSearchShutterstock from "./ImageSearchShutterstock.jsx"
//import ImageSearchPixabay from "./ImageSearchPixabay.jsx"
//import ImageSearchFlickr from "./ImageSearchFlickr.jsx"

import './App.css'

const blob = shuffler(food);

function App() 
{
  const [current, setCurrent] = useState(0);
  const [quiz, setQuiz] = useState(false)

  return (
    <>
      <ImageSearch prompt={blob[current].en} />
      <div className="tile">
        <Tile
          src={blob[current].img}
          en={blob[current].en}
          fr={blob[current].fr}
          es={blob[current].es}
          pt={blob[current].pt}
          it={blob[current].it}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      </div>
      <div className="navigation">
        <NavButton direction={false} current={current} setCurrent={setCurrent} blob={blob} quiz={quiz} setQuiz={setQuiz}/>
        <NavButton direction={true} current={current} setCurrent={setCurrent} blob={blob} quiz={quiz} setQuiz={setQuiz}/>
      </div>


    </>
  );
}

export default App

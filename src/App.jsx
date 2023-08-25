import { useState } from 'react'
import { food } from "./vocab-lists/food.js";
import Tile from "./Tile.jsx";
import NavButton from "./NavButton.jsx";
import { shuffler } from "./tools/shuffler.js";
import ImageSearch from "./image-request/ImageSearch.jsx";
import './App.css'

const blob = shuffler(food);

function App() 
{
  const [current, setCurrent] = useState(0);
  const [quiz, setQuiz] = useState(false)

  return (
    <>
      <ImageSearch blob={blob} current={current} />
      <div className="tile">
        <Tile
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

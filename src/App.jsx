import { useState } from 'react'
import { food } from "./food.js";
import Tile from "./Tile.jsx";
import NavButton from "./NavButton.jsx";
import { shuffler } from "./shuffler.js";

import './App.css'

const blob = shuffler(food);

function App() {
  const [current, setCurrent] = useState(0);
  const [quiz, setQuiz] = useState(false)

  function handleClickNext() {
    if (current < blob.length - 1) {
      setCurrent(current + 1);
    }
    if (quiz === true) {
      setQuiz(false)
    }
    
  }

  function handleClickPrev() {
    if (current > 0) {
      setCurrent(current - 1);
    }
    if (quiz === true) {
      setQuiz(false)
    }
    
  }

  function handleQuizClick() {
    quiz ? setQuiz(false) : setQuiz(true)
  }

  return (
    <>
      <div className="tile">
        <Tile
          src={blob[current].img}
          en={blob[current].en}
          fr={blob[current].fr}
          es={blob[current].es}
          pt={blob[current].pt}
          it={blob[current].it}
          quiz={quiz}
          handleQuizClick={handleQuizClick}
        />
      </div>
      <div className="navigation">
        <NavButton forward={false} handleClick={handleClickPrev} />
        <NavButton forward={true} handleClick={handleClickNext} />
      </div>
    </>
  );
}

export default App

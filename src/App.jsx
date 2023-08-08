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
  const [guess, setGuess] = useState("")

  function handleClickNext() {
    if (current < blob.length - 1) {
      setCurrent(current + 1);
      setGuess("")
    }
    if (quiz === true) {
      setQuiz(false)
      setGuess("")
    }
  }

  function handleClickPrev() {
    if (current > 0) {
      setCurrent(current - 1);
      setGuess("")
    
    }
    if (quiz === true) {
      setQuiz(false)
      setGuess("")
     
    }
  }

  function handleQuizClick() {
    quiz ? setQuiz(false) : setQuiz(true)
    setGuess("")
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
          guess={guess}
          setGuess={setGuess}
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

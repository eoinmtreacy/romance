import { useState } from 'react'
import { food } from "./vocab-lists/food.js";
import Tile from "./Tile.jsx";
import NavButton from "./NavButton.jsx";
import { shuffler } from "./tools/shuffler.js";
import ImageSearch from "./image-request/ImageSearch.jsx";

const blob = shuffler(food);

function App() 
{
  const [current, setCurrent] = useState(0);
  const [quiz, setQuiz] = useState(false);
  const [urlArr, setUrlArr] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ImageSearch blob={blob} current={current} urlArr={urlArr} setUrlArr={setUrlArr}/>
  
  <div className="mt-8">
    <Tile
      en={blob[current].en}
      fr={blob[current].fr}
      es={blob[current].es}
      pt={blob[current].pt}
      it={blob[current].it}
      quiz={quiz}
      setQuiz={setQuiz}
      score={score}
      setScore={setScore}
    />
  </div>
  
  <div className="mt-8 flex space-x-4">
  <NavButton direction={false} current={current} setCurrent={setCurrent} blob={blob} quiz={quiz} setQuiz={setQuiz} urlArr={urlArr}/>
  <NavButton direction={true} current={current} setCurrent={setCurrent} blob={blob} quiz={quiz} setQuiz={setQuiz} urlArr={urlArr}/>
</div>

</div>

  );
}

export default App

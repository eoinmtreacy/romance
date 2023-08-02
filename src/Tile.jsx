import VocabButton from "./VocabButton.jsx"
import {useState} from "react"

export default function Tile({ en, src, fr, es, pt, it }) {
    const [quiz, setQuiz] = useState(false)
    
    function handleClick() {
      quiz ? setQuiz(false) : setQuiz(true)
    }

    return (
      <>
      
      <div>
        <img className="tilePic" src={src} alt={en} />
        <VocabButton lang={fr} flag="fr"/>
        <VocabButton lang={es} flag="es"/>
        <VocabButton lang={pt} flag="pt"/>
        <VocabButton lang={it} flag="it"/>
      </div>


      <div>
        <button onClick={handleClick}>{quiz ? "Do Over" : "Quiz"}</button>
      </div>
      </>
    );
  }
  
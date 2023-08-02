import VocabButton from "./VocabButton.jsx"
import {useState} from "react"

function ButtonBuilder ({fr, es, pt, it}) {
  let dialects = [
    { vocab: fr, flag: "fr" },
    { vocab: es, flag: "es" },
    { vocab: pt, flag: "pt" },
    { vocab: it, flag: "it" }
  ]
  
  let buttons = dialects.map((d) => (
      <VocabButton lang={d.vocab} flag={d.flag}/>
  ))

  return(buttons)
}

export default function Tile({ en, src, fr, es, pt, it }) {
    const [quiz, setQuiz] = useState(false)
    
    function handleClick() {
      quiz ? setQuiz(false) : setQuiz(true)
    }

    return (
      <>

      <div>
        <img className="tilePic" src={src} alt={en} />
        <ButtonBuilder fr={fr} es={es} pt={pt} it={it}/>
      </div>

      <div>
        <button onClick={handleClick}>{quiz ? "Do Over" : "Quiz"}</button>
      </div>
      </>
    );
  }
  
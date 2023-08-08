import VocabButton from "./VocabButton.jsx"
import {shuffler} from "./shuffler.js"

function ButtonBuilder ({fr, es, pt, it, quiz}) {


  let dialects = [
    { vocab: fr, flag: "fr" },
    { vocab: es, flag: "es" },
    { vocab: pt, flag: "pt" },
    { vocab: it, flag: "it" }
  ]

  let problems

  quiz ? problems = shuffler(dialects) : problems = dialects
  
  let buttons = problems.map((d) => (
      <VocabButton lang={d.vocab} flag={d.flag}/>
  ))

  return(buttons)
}

export default function Tile({ en, src, fr, es, pt, it, quiz, handleQuizClick}) {

    return (
      <>

      <div>
        <img className="tilePic" src={src} alt={en} />
        <ButtonBuilder fr={fr} es={es} pt={pt} it={it} quiz={quiz}/>
      </div>

      <div>
        <button onClick={handleQuizClick}>{quiz ? "Do Over" : "Quiz"}</button>
      </div>
      </>
    );
  }
  
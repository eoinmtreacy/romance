import VocabButton from "./VocabButton.jsx"
import {shuffler} from "./shuffler.js"

function ButtonBuilder ({fr, es, pt, it, quiz, guess, setGuess}) {


  let dialects = [
    { vocab: fr, flag: "fr"},
    { vocab: es, flag: "es"},
    { vocab: pt, flag: "pt"},
    { vocab: it, flag: "it"}
  ]

  let problems

  if (quiz === true) {
    problems = shuffler(dialects)
  } else{
    problems = dialects
  }

  let buttons = problems.map((p) => (
      <VocabButton lang={p.vocab} flag={p.flag} isTarget={false} guess={guess} setGuess={setGuess}/>
  ))

  if (quiz === true) {
    buttons.splice(0,1,
      <VocabButton lang="" flag={problems[0].flag} isTarget={true} guess={guess} setGuess={setGuess}/>)
  }

  
  return(buttons)
}

export default function Tile({ en, src, fr, es, pt, it, quiz, handleQuizClick, guess, setGuess}) {

    return (
      <>
      <div>
        <img className="tilePic" src={src} alt={en} />
        <ButtonBuilder fr={fr} es={es} pt={pt} it={it} quiz={quiz} guess={guess} setGuess={setGuess}/>
      </div>

      <div>
        <button onClick={handleQuizClick}>{quiz ? "Do Over" : "Quiz"}</button>
      </div>
      </>
    );
  }
  
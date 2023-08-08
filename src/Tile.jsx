import VocabButton from "./VocabButton.jsx"
import {shuffler} from "./shuffler.js"

function ButtonBuilder ({fr, es, pt, it, quiz, guess, setGuess}) {


  let dialects = [
    { vocab: fr, flag: "fr"},
    { vocab: es, flag: "es"},
    { vocab: pt, flag: "pt"},
    { vocab: it, flag: "it"}
  ]

  if (quiz === true && guess === "") {
    shuffler(dialects)
  } 

  let buttons = dialects.map((d) => (
      <VocabButton lang={d.vocab} flag={d.flag} isTarget={false} guess={guess} setGuess={setGuess}/>
  ))

  if (quiz === true) {
    buttons.splice(0,1,
      <VocabButton lang="" flag={dialects[0].flag} isTarget={true} guess={guess} setGuess={setGuess}/>)
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
  
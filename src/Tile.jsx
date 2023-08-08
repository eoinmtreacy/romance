import VocabButton from "./VocabButton.jsx"
import {shuffler} from "./shuffler.js"

function ButtonBuilder ({fr, es, pt, it, quiz}) {


  let dialects = [
    { vocab: fr, flag: "fr", target: false },
    { vocab: es, flag: "es", target: false },
    { vocab: pt, flag: "pt", target: false },
    { vocab: it, flag: "it", target: false }
  ]

  let problems

  if (quiz === true) {
    problems = shuffler(dialects)
    problems[0].target = true
    console.log(problems[0])
  } else{
    problems = dialects
  }

  let buttons = problems.map((p) => (
      <VocabButton lang={p.vocab} flag={p.flag} isTarget={false}/>
  ))

  if (quiz === true) {
    buttons.splice(0,1,
      <VocabButton lang="" flag={problems[0].flag} isTarget={true}/>)
  }

  
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
  
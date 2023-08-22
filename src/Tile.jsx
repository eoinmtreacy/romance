import VocabBox from "./VocabBox"
import {shuffler} from "./tools/shuffler.js"

export default function Tile({ en, src, fr, es, pt, it, quiz, setQuiz}) 
{
  let dialects = [
    { vocab: fr, flag: "fr"},
    { vocab: es, flag: "es"},
    { vocab: pt, flag: "pt"},
    { vocab: it, flag: "it"}
  ]

  if (quiz === true) 
  {
    dialects = shuffler(dialects)
  } 

  let buttons = dialects.map((d) => (
      <VocabBox lang={d.vocab} flag={d.flag} isTarget={false} quiz={quiz}/>
  ))

  if (quiz === true) 
  {
    buttons.splice(0,1,
      <VocabBox lang={dialects[0].vocab} flag={dialects[0].flag} isTarget={true} quiz={quiz}/>)
  }

  function handleQuizClick() 
  {
    quiz ? setQuiz(false) : setQuiz(true)
  }
    return (
      <>
      <div>
        <img className="tilePic" src={src} alt={en} />
        
        <>{buttons}</>
      </div>

      <div>
        <button onClick={handleQuizClick}>{quiz ? "Do Over" : "Quiz"}</button>
      </div>
      </>
    );
  }
  
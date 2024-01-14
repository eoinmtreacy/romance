import VocabBox from "./VocabBox"
import {shuffler} from "./tools/shuffler.js"

export default function Tile({ fr, es, pt, it, quiz, setQuiz, score, setScore}) 
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

  let buttons = dialects.map((d) => 
  (
      <VocabBox lang={d.vocab} flag={d.flag} isTarget={false} quiz={quiz} score={score} setScore={setScore} setQuiz={setQuiz}/>
  ))

  if (quiz === true) 
  {
    buttons.splice(0,1,
      <VocabBox lang={dialects[0].vocab} flag={dialects[0].flag} isTarget={true} quiz={quiz} score={score} setScore={setScore} setQuiz={setQuiz}/>)
  }

  function handleQuizClick() 
  {
    quiz ? setQuiz(false) : setQuiz(true)
  }
    return (
      <div className="flex flex-col items-center justify-center">
  <div className="mb-4">
    <>{buttons}</>
  </div>
  
  <div>
    <button
      onClick={handleQuizClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
    >
      {quiz ? "Do Over" : "Quiz"}
    </button>
  </div>
</div>

    );
  }
  
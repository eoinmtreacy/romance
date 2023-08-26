import { useState } from "react"
import { lvs } from "./tools/lvs"

export default function VocabBox ({lang, flag, isTarget, quiz}) {
  const [guess, setGuess] = useState("")

  if (quiz === false && guess !== "") {
    setGuess("")
  }

  let score;

  if (quiz === true && isTarget) { 
    score = lvs(guess, lang)
    console.log(score)
  }

  if (score === 0) {
    alert("Congratulations! You guessed it right.")
  }

    return(
      <div className="inline-flex items-center">
  <img className="filter brightness-125 hover:brightness-100 transition-all p-2" alt={lang} src={"/" + flag + ".svg"}></img>
  <input type="text" className="bg-gray-100 text-gray-800 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-300 hover:border-blue-300 transition-all text-center" value={isTarget ? guess : lang} onChange={isTarget ? (e) => setGuess(e.target.value) : (e) => setGuess(lang)}></input>
</div>
)
  }
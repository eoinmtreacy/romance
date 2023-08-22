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
      <>
      <img alt={lang} src={"/" + flag + ".svg"}></img>
          
          <input className="vocabBox" type="text" value={isTarget ? guess : lang} onChange={isTarget ? (e) => setGuess(e.target.value) : (e) => setGuess(lang)}></input>
          </>
    )
  }
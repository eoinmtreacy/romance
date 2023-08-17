import { useState } from "react"
import { lvs } from "./lvs"

export default function VocabButton ({lang, flag, isTarget, quiz}) {
  const [guess, setGuess] = useState("")

  if (quiz === false && guess !== "") {
    setGuess("")
  }

    return(
      <>
      <img alt={lang} src={"/" + flag + ".svg"}></img>
          
          <input className="vocabBox" type="text" value={isTarget ? guess : lang} onChange={isTarget ? (e) => setGuess(e.target.value) : (e) => setGuess(lang)}></input>

          <b>      </b>

          </>
    )
  }
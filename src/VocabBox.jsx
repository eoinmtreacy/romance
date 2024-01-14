import React, { useState, useEffect } from "react";
import { lvs } from "./tools/lvs";

export default function VocabBox ({lang, flag, isTarget, quiz, score, setScore, setQuiz}) {
  const [guess, setGuess] = useState("");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let dist;

    if (quiz === true && isTarget) {
      dist = lvs(guess, lang);

      if (dist === 0) {
        setShouldAnimate(true);
        setScore(score + 1);

        setTimeout(() => {
          setShouldAnimate(false);
        }, 1500);

        setQuiz(false)
        setGuess("")
      }
    }
  }, [guess, isTarget, lang, quiz]);

  return (
    <div className={`inline-flex items-center ${shouldAnimate ? "animate-bounce" : ""}`}>
      <img
        className="filter brightness-125 hover:brightness-100 transition-all p-2"
        alt={lang}
        src={"/romance/" + flag + ".svg"}
      />
      <input
  type="text"
  className={`bg-gray-100 text-gray-800 border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-300 hover:border-blue-300 transition-all text-center ${
    shouldAnimate ? "animate-pulse bg-green-300" : ""
  }`}
  value={isTarget ? guess : lang}
  onChange={isTarget ? (e) => setGuess(e.target.value) : (e) => setGuess(lang)}
/>
    </div>
  );
}

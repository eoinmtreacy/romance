export default function VocabButton ({lang, flag}) {
    return(
      <fragment>
      <img alt={lang} src={"/" + flag + ".svg"}></img>
          
          <input className="vocabBox" type="text" value={lang}></input>
          </fragment>
    )
  }
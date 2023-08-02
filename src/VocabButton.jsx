export default function VocabButton ({lang, flag}) {
    return(
      <>
      <img alt={lang} src={"/" + flag + ".svg"}></img>
          <button>{lang}</button>
          </>
    )
  }
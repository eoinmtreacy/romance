export default function Tile({ en, src, fr, es, pt, it }) {
    return (
      <>
      <div>
        <img className="tilePic" src={src} alt={en} />
        <Translation lang={fr} flag="fr"/>
        <Translation lang={es} flag="es"/>
        <Translation lang={pt} flag="pt"/>
        <Translation lang={it} flag="it"/>
      </div>
      <div>
        <button>Quiz</button>
      </div>
      </>
    );
  }
  
  function Translation ({lang, flag}) {
    return(
      <>
      <img alt={lang} src={"/" + flag + ".svg"}></img>
          <button>{lang}</button>
          </>
    )
  }
export default function Tile({ en, src, fr, es, pt, it }) {
    return (
      <>
      <div>
        <img className="tilePic" src={src} alt={en} />
        <img alt="fr" src="/fr.svg"></img>
          <button>{fr}</button>
        <img alt="es" src="/es.svg">
          </img><button>{es}</button>
          <img alt="pt" src="/pt.svg"></img>
        <button>{pt}</button>
          <img alt="it" src="/it.svg"></img>
        <button>{it}</button>
      </div>
      <div>
        <button>Quiz</button>
      </div>
      </>
    );
  }
  
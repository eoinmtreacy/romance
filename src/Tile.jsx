import VocabButton from "./VocabButton.jsx"

export default function Tile({ en, src, fr, es, pt, it }) {
    return (
      <>
      <div>
        <img className="tilePic" src={src} alt={en} />
        <VocabButton lang={fr} flag="fr"/>
        <VocabButton lang={es} flag="es"/>
        <VocabButton lang={pt} flag="pt"/>
        <VocabButton lang={it} flag="it"/>
      </div>
      <div>
        <button>Quiz</button>
      </div>
      </>
    );
  }
  
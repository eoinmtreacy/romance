export default function Tile({ en, src, fr, es, pt, it }) {
    return (
      <div>
        <img className="tilePic" src={src} alt={en} />
        <button>{fr}</button>
        <button>{es}</button>
        <button>{pt}</button>
        <button>{it}</button>
      </div>
    );
  }
  
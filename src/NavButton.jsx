export default function NavButton({ forward, handleClick }) {
    let label = forward ? ">" : "<";
    return <button onClick={handleClick}>{label}</button>;
  }
  
//creation of the square element that will compose the board
import './App.css'

function Square({ valor }) {
  function handleClick() {
    console.log("Botão clicado!!!");
  }
  return (
    <button className="square" onClick={handleClick}>{valor}</button>
  );
}

export default function Tabuleiro() {
  return (
    <div>
      <div>
        <Square valor="1"></Square>
        <Square valor="2"></Square>
        <Square valor="3"></Square>
      </div>
      <div>
        <Square valor="4"></Square>
        <Square valor="5"></Square>
        <Square valor="6"></Square>
      </div>
      <div>
        <Square valor="7"></Square>
        <Square valor="8"></Square>
        <Square valor="9"></Square>
      </div>
    </div>

  )
}
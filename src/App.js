//creation of the square element that will compose the board
import { useState } from 'react';
import './App.css'

function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

function Tabuleiro({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || haVencedor(squares)) return alert(haVencedor(squares) + " venceu!");
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const vencedor = haVencedor(squares);
  let status;
  if (vencedor) {
    status = "Vencedor: " + vencedor;
  } else {
    status = "Próximo a jogar: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">
        {status};
      </div>
      <div>
        <Square valor={squares[0]} onSquareClick={() => { handleClick(0) }} />
        <Square valor={squares[1]} onSquareClick={() => { handleClick(1) }} />
        <Square valor={squares[2]} onSquareClick={() => { handleClick(2) }} />
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={() => { handleClick(3) }} />
        <Square valor={squares[4]} onSquareClick={() => { handleClick(4) }} />
        <Square valor={squares[5]} onSquareClick={() => { handleClick(5) }} />
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={() => { handleClick(6) }} />
        <Square valor={squares[7]} onSquareClick={() => { handleClick(7) }} />
        <Square valor={squares[8]} onSquareClick={() => { handleClick(8) }} />
      </div>
    </div>

  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Vai para o movimento do #" + move;
    } else {
      description = "Vai para o inicio do jogo!";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="gamo-board">
        <Tabuleiro xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );

};

function haVencedor(squares) {
  // Linhas
  if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) return squares[0];
  if (squares[3] && squares[3] === squares[4] && squares[3] === squares[5]) return squares[3];
  if (squares[6] && squares[6] === squares[7] && squares[6] === squares[8]) return squares[6];

  // Colunas
  if (squares[0] && squares[0] === squares[3] && squares[0] === squares[6]) return squares[0];
  if (squares[1] && squares[1] === squares[4] && squares[1] === squares[7]) return squares[1];
  if (squares[2] && squares[2] === squares[5] && squares[2] === squares[8]) return squares[2];

  // Diagonais
  if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) return squares[0];
  if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) return squares[2];

  // if ((squares[0] === squares[1] && squares[0] === squares[2]) ||
  //   (squares[3] === squares[4] && squares[3] === squares[5]) ||
  //   (squares[6] === squares[7] && squares[6] === squares[8]) ||
  //   (squares[0] === squares[3] && squares[0] === squares[6]) ||
  //   (squares[1] === squares[4] && squares[1] === squares[7]) ||
  //   (squares[2] === squares[5] && squares[2] === squares[8]) ||
  //   (squares[0] === squares[4] && squares[0] === squares[8]) ||
  //   (squares[2] === squares[4] && squares[2] === squares[6])
  // ) {
  //   return squares;
  // }

  // const linha = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ];

  // for (let l of linha) {
  //   const [a, b, c] = l;
  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     return squares[a];
  //   }
  // }
  return null;

}
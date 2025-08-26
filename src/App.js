//creation of the square element that will compose the board
import { useState } from 'react';
import './App.css'

function Square(valor, onSquareClick) {
  return (
    <button className="square" onClick={onSquareClick}>{valor}</button>
  );
}

export default function Tabuleiro() {
  return (
    <div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>

  )
}
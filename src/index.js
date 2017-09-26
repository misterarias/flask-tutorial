import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return(
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true
    }
  }

  getPlayerIcon() {
    return this.state.xIsNext ? 'O' : 'X'  ;
  }

  getNextPlayerIcon() {
    return this.state.xIsNext ? 'X' : 'O' ;
  }

  handleClick(index) {
    const history = this.state.history ;
    const current = history[history.length - 1] ;
    const squares = current.squares.slice() ;
    if (this.calculateWinner(squares) || squares[index] ) {
      return;
    }

    squares[index] = this.getNextPlayerIcon();

    this.setState( {
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {

    const history = this.state.history ;
    const current = history[history.length - 1] ;
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'WINNER IS: ' + this.getPlayerIcon();
    } else {
      status = 'Next player: ' + this.getNextPlayerIcon();
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
            squares={current.squares}
            onClick={(index) => this.handleClick(index)}
          />
        </div>
        <div className="game-info">
          <div>
            {/* status */}
          </div>
          <ol>
            {/* TODO */}
          </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

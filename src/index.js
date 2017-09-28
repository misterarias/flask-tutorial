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
      stepNumber: 0
    }
  }

  xIsNext() {
    return this.state.stepNumber % 2 === 0 ;
  }

  getPlayerIcon() {
    return this.xIsNext() ? 'X' : 'O'  ;
  }

  getNextPlayerIcon() {
    return ! this.xIsNext() ? 'X' : 'O'  ;
  }

  handleClick(index) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1) ;
    const current = history[history.length - 1] ;
    const squares = current.squares.slice() ;
    if (this.calculateWinner(squares) || squares[index] ) {
      return;
    }

    squares[index] = this.getPlayerIcon();

    this.setState( {
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length
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

  jumpTo(newStepNumber) {
    this.setState({
      stepNumber: newStepNumber
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = <p className='red'>{this.getNextPlayerIcon()}  Wins!</p> ;
    } else {
      status = <p className='blue'>Next turn: {this.getPlayerIcon()} </p> ;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(index) => this.handleClick(index)}
          />
        </div>
        <div className="game-info">
          <div className="status">
            {status}
          </div>
          <ol>
            {moves}
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

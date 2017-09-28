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
    let rowNumber = parseInt(this.props.rowNumber, 10);
    let array = Array(rowNumber).fill(null);
    return (
      <div>{
        array.map( (item, row) => {
          return (
            <div className="board-row">{
              array.map( (item, col) => {
                return (this.renderSquare(col + row*rowNumber));
              })
            }
          </div>
          )
        })
      }
    </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super();

    let lines = []
    const rowNumber = parseInt(props.rowNumber, 10);

    // Horizontal / Vertical  rows
    for (let i=0; i<rowNumber; i++) {
      let h_row = [], v_row=[] ;
      for (let j=0; j<rowNumber; j++) {
        h_row = h_row.concat( j + i*rowNumber );
        v_row = v_row.concat( i + j*rowNumber );
      }
      lines = lines.concat([h_row]);
      lines = lines.concat([v_row]);
    }

    // Diagonals
    let diag1 = [0], diag2=[rowNumber - 1] ;
    for (let i=0; i<(rowNumber - 1); i++) {
      diag1 = diag1.concat(diag1[i] + rowNumber + 1);
      diag2 = diag2.concat(diag2[i] + rowNumber - 1);
    }
    lines = lines.concat([diag1]).concat([diag2]);

    this.state = {
      history: [
        {
          squares: Array(props.rowNumber**2).fill(null)
        }
      ],
      stepNumber: 0,
      rowNumber: rowNumber,
      winningLines: lines
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
    if (this.calculateWinner(squares) || squares[index] !== null ) {
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

  // Given a row representing board state, see if there is a winner
  calculateWinner(squares) {
    const lines = this.state.winningLines ;
    for (let i = 0; i < lines.length; i++) {
      const candidate = lines[i];
      const first = squares[candidate[0]]
      if (first === null) {
        continue;
      }

      let winner = true;;
      for (let j=1; j<candidate.length; j++) {
        if (first !== squares[candidate[j]]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return true
      }
    }
    return false;
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
            rowNumber={this.state.rowNumber}
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
  <Game
    rowNumber="5"
  />,
  document.getElementById('root')
);

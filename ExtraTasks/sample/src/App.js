import "./App.css";
import { useState } from 'react'

function Square({row, column}) {
  return <div
  className="chess"
  style={{backgroundColor: (row + column) % 2 === 0 ? "grey" : "black"}}
  ></div>;
};

// function Row(){
//   let row = [];
//   for(let i = 0; i < 8; i++){
//     row.push(<Square />)
//   };
//   return row;
// }

function App() {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));
  // const renderRows = () => {
  //   let rows = [];
  //   for(let i = 0; i < 8; i++){
  //     rows.push(<Row />)
  //   };
  //   return rows;
  // }
  
  return (
    <div className="board">
      {/* <div>
      <Row />
      </div> */}
      {board.map((row, rowIndex) => {
        return (
          <div>
            {row.map((square, squareIndex) => {
              return <Square row={rowIndex}
              column={squareIndex}
              />
            })}
          </div>
        )
      })}
  </div>
  );
};

export default App;

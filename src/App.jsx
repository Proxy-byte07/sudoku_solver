import { useState } from "react";
import SudokuGrid from "./components/SudokuGrid";
import SudokuControls from "./components/SudokuControls";
import {
  solveSudoku,
  isValidGrid,
} from "./utils/sudokuSolver";
import "./App.css";

const emptyGrid = () =>
  Array.from({ length: 9 }, () => Array(9).fill(0));

const exampleGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function App() {
  const [grid, setGrid] = useState(emptyGrid());
  const [message, setMessage] = useState(
    "Enter a Sudoku puzzle or load the example."
  );
  const [solved, setSolved] = useState(false);

  const handleChange = (row, col, value) => {
    const newGrid = grid.map((currentRow) => [...currentRow]);

    newGrid[row][col] = value;

    setGrid(newGrid);
    setMessage("Enter your puzzle and click Solve Sudoku.");
    setSolved(false);
  };

  const handleSolve = () => {
    const puzzle = grid.map((row) => [...row]);

    // Check if the grid is completely empty
    const hasNumbers = puzzle.some((row) =>
      row.some((value) => value !== 0)
    );

    if (!hasNumbers) {
      setMessage("Please enter a Sudoku puzzle first.");
      return;
    }

    // Validate the initial puzzle
    if (!isValidGrid(puzzle)) {
      setMessage(
        "Invalid Sudoku puzzle. Please check the entered values."
      );
      setSolved(false);
      return;
    }

    // Try to solve the puzzle
    const solvedPuzzle = puzzle.map((row) => [...row]);

    if (solveSudoku(solvedPuzzle)) {
      setGrid(solvedPuzzle);
      setMessage("Sudoku solved successfully!");
      setSolved(true);
    } else {
      setMessage("This Sudoku puzzle has no solution.");
      setSolved(false);
    }
  };

  const handleClear = () => {
    setGrid(emptyGrid());
    setMessage("Enter a Sudoku puzzle or load the example.");
    setSolved(false);
  };

  const handleLoadExample = () => {
    setGrid(exampleGrid.map((row) => [...row]));
    setMessage("Example puzzle loaded. Click Solve Sudoku.");
    setSolved(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Sudoku Solver</h1>

        <p className="description">
          Enter an unsolved Sudoku puzzle and let the
          backtracking algorithm solve it automatically.
        </p>

        <SudokuGrid
          grid={grid}
          onChange={handleChange}
          disabled={solved}
        />

        <SudokuControls
          onSolve={handleSolve}
          onClear={handleClear}
          onLoadExample={handleLoadExample}
          disabled={solved}
        />

        <p
          className={`message ${
            message.includes("successfully") ? "success" : ""
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;
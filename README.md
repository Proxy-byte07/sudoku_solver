Project Overview

Sudoku Solver is a web-based application designed to automatically solve standard 9×9 Sudoku puzzles. The application allows users to enter an unsolved Sudoku puzzle into an interactive grid or load a predefined example puzzle. Once the puzzle is entered, the application validates the input and uses a backtracking algorithm to generate and display the complete solution.

Features

The application provides an interactive 9×9 Sudoku grid where users can enter values from 1 to 9. It validates the entered values and checks for conflicts within rows, columns, and 3×3 boxes. Users can solve the puzzle automatically using the Solve Sudoku button, load a predefined puzzle using Load Example, or clear the grid using the Clear button. The application also provides appropriate success and error messages based on the entered puzzle and its solvability.

Technologies Used

The project is developed using React and JavaScript for the application logic and user interface. Vite is used as the development and build tool, while CSS is used to create a clean and responsive interface. ESLint is used to maintain code quality and identify potential issues during development.

Project Structure

The application follows a component-based structure that separates the user interface from the core Sudoku-solving logic. SudokuGrid.jsx manages the interactive Sudoku grid and user input, while SudokuControls.jsx provides the controls for solving, clearing, and loading example puzzles. The sudokuSolver.js file contains the core algorithm, including cell searching, validation, and puzzle solving. App.jsx manages the overall application state and connects the different components.

Algorithm

The application uses the backtracking algorithm to solve Sudoku puzzles. The algorithm first searches for an empty cell and then attempts to place numbers from 1 to 9. Before placing a number, it checks whether the number is valid according to the Sudoku rules by examining the corresponding row, column, and 3×3 box. If a valid number is placed, the algorithm recursively continues with the remaining empty cells. If a particular choice leads to an unsolvable state, the algorithm reverses that choice and tries another number. This process continues until the puzzle is successfully solved or all possible combinations have been exhausted.

Validation

The application performs validation before attempting to solve the puzzle. It ensures that users enter only valid Sudoku values and checks for duplicate numbers within the same row, column, or 3×3 box. Invalid configurations are rejected and an appropriate error message is displayed. The application also identifies cases where a valid puzzle does not have a possible solution and informs the user accordingly.

Testing

The application was tested with valid and incomplete Sudoku puzzles to verify that the backtracking algorithm produces the correct solutions. Input validation was tested using invalid characters, numbers outside the range of 1–9, and duplicate values within rows, columns, and 3×3 boxes. The application was also tested with unsolvable puzzles, an empty grid, the Load Example functionality, and the Clear functionality to ensure that each feature behaves as expected.

Installation and Usage

To run the project locally, clone the repository and navigate to the project directory. Install the required dependencies using npm install and start the development server using npm run dev. The application can then be accessed through the local URL provided by Vite, typically http://localhost:5173.

For production verification, the project can be checked using npm run lint and built using npm run build. The production build can also be previewed using npm run preview.
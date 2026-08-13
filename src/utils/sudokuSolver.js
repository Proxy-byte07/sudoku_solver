// Find the first empty cell in the Sudoku grid
export function findEmptyCell(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        return [row, col];
      }
    }
  }

  return null;
}

// Check whether a number can be placed at a given position
export function isValid(grid, row, col, num) {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === num) {
      return false;
    }
  }

  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[boxRow + i][boxCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

// Solve the Sudoku using backtracking
export function solveSudoku(grid) {
  const emptyCell = findEmptyCell(grid);

  // No empty cells means the puzzle is solved
  if (!emptyCell) {
    return true;
  }

  const [row, col] = emptyCell;

  // Try numbers 1 to 9
  for (let num = 1; num <= 9; num++) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num;

      // Recursively solve the remaining cells
      if (solveSudoku(grid)) {
        return true;
      }

      // Backtrack if the solution doesn't work
      grid[row][col] = 0;
    }
  }

  return false;
}

// Check whether the initially entered puzzle is valid
export function isValidGrid(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = grid[row][col];

      if (num === 0) continue;

      // Temporarily remove the number
      grid[row][col] = 0;

      if (!isValid(grid, row, col, num)) {
        grid[row][col] = num;
        return false;
      }

      grid[row][col] = num;
    }
  }

  return true;
}
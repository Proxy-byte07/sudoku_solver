function SudokuGrid({ grid, onChange, disabled }) {
  const handleChange = (row, col, value) => {
    // Allow only empty input or numbers 1-9
    if (value !== "" && !/^[1-9]$/.test(value)) {
      return;
    }

    onChange(row, col, value === "" ? 0 : Number(value));
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={value === 0 ? "" : value}
            onChange={(e) =>
              handleChange(rowIndex, colIndex, e.target.value)
            }
            disabled={disabled}
            aria-label={`Row ${rowIndex + 1}, Column ${colIndex + 1}`}
            className={
              `${colIndex === 2 || colIndex === 5 ? "right-border " : ""}` +
              `${rowIndex === 2 || rowIndex === 5 ? "bottom-border" : ""}`
            }
          />
        ))
      )}
    </div>
  );
}

export default SudokuGrid;
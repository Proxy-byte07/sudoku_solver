function SudokuControls({
  onSolve,
  onClear,
  onLoadExample,
  disabled,
}) {
  return (
    <div className="controls">
      <button className="btn primary" onClick={onSolve} disabled={disabled}>
        Solve
      </button>

      <button className="btn secondary" onClick={onLoadExample}>
        Example
      </button>

      <button className="btn ghost" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default SudokuControls;
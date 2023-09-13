function ResetButton({ onClick, count }) {
  const buttonStyle = { backgroundColor: 'lightGreen' };

  return (
    <div>
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={onClick}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default ResetButton;

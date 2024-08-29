function Button({ btnClick, text }) {
  return (
    <button
      className="py-2 px-4 rounded bg-blue-500 text-white opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
      onClick={btnClick}
    >
      {text}
    </button>
  );
}

export default Button;

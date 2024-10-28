function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"]
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-[0.1em] border-solid border-blackLight"
        >
          <span className={` ${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>{letter}</span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;

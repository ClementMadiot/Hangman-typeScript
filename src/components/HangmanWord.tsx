type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuessed: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuessed,
  reveal
}: HangmanWordProps) {
  return (
    <div className="flex gap-1 text-7xl font-bold uppercase font-mono text-blackLight">
      {wordToGuessed.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-[0.1em] border-solid border-blackLight"
        >
          <span
            className={` ${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible  "
            } ${
              !guessedLetters.includes(letter) && reveal ? "text-red-400" : ""
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord;

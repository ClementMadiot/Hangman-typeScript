type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuessed: string
}


function HangmanWord({ guessedLetters, wordToGuessed }: HangmanWordProps) {

  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {wordToGuessed.split("").map((letter, index) => (
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

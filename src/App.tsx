import { useCallback, useEffect, useState } from "react";
import words from "./data/wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  // console.log(wordToGuess);
  /// All the incorrect letters are the ones where the letter is not in the word to guess
  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // Message to user
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetter.includes(letter))

  // Display letter if corect
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isLoser || isWinner) return;

      setGuessedLetter((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  // New word to guess
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // if it match between a & z
      if (!key.match(/^[a-z]$/)) return;
      // otherwise run the function
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter, addGuessedLetter]);

  // Refresh the page end game
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // if key press is not Enter
      if (key !== "Enter") return;

      e.preventDefault();
      // clear letter
      setGuessedLetter([])
      // set new word
      setWordToGuess(getWord())
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col gap-6 my-0 mx-auto items-center">
      <div className="text-3xl text-center mt-4">
        {isWinner && "Winner ! - Press Enter to try again"}
        {isLoser && "Nice Try - Press Enter to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetter} wordToGuessed={wordToGuess} />
      <div className="self-stretch">
        <Keyboard
          isDisable={isWinner || isLoser}
          activeLetters={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;

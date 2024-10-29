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
  const incorrectLetters = guessedLetter.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetter.includes(letter)) return

    setGuessedLetter(currentLetters => [...currentLetters, letter])
  },[guessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      // if it match between a & z
      if(!key.match(/^[a-z]$/)) return
      // otherwise run the function
      e.preventDefault()
      addGuessedLetter(key)
      
    }
    document.addEventListener("keypress", handler)

    return () => {
    document.removeEventListener("keypress", handler)
    }
  }, [guessedLetter])

  return (
    <div className="max-w-[800px] flex flex-col gap-6 my-0 mx-auto items-center">
      <div className="text-3xl text-center mt-4">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetter} wordToGuessed={wordToGuess} />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;

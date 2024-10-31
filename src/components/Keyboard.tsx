const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters:string[]
  inactiveLetters:string[]
  addGuessedLetter: (letter: string) => void
}
export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  const inactive = "opacity-[0.5] bg-red-200"
  const active = "bg-blue-200"
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(75px,1fr))] gap-2 my-2 ">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            type="button"
            className={`inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition-colors focus:outline-none focus:ring-0 hover:bg-neutral-300   ${isActive ? active : ''} ${isInactive ? inactive : ''} `}
            disabled={isInactive || isActive}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })} 
    </div>
  );
}

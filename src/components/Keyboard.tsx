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
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  isDisable?: boolean;
};
export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  isDisable = false
}: KeyboardProps) {
  const inactive = "opacity-[0.5] bg-red-400 hover:bg-red-400 text-black";
  const active = " active:bg-blue-300 bg-blue-300 hover:bg-blue-300 text-neutral-800";

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(75px,1fr))] gap-2 my-2 ">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            type="button"
            className={`inline-block rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition-colors focus:outline-none focus:ring-0  ${
              isActive ? active : "bg-neutral-100 shadow hover:bg-neutral-200/80"
            } ${isInactive ? inactive : ""} `}
            disabled={isInactive || isActive || isDisable}
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

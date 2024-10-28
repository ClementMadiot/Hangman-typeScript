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
export default function Keyboard() {
  const inactive = "opacity-[0.15]"
  const active = "hover:bg-neutral-300 focus:bg-blue-200 focus:outline-none focus:ring-0 active:bg-neutral-300"
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(75px,1fr))] gap-2 my-2 ">
      {KEYS.map((key) => {
        return (
          <button
            type="button"
            className={`inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition-colors focus:outline-none focus:ring-0  ${active} `}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

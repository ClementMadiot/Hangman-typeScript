const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-solid border-blackLight absolute top-[50px] -right-[20px]"></div>
);
const BODY = (
  <div className="w-[10px] h-[100px] absolute top-[100px] right-0 bg-blackLight"></div>
);
const RIGHT_ARM = (
  <div className="w-[80px] h-[10px] absolute top-[135px] -right-[80px] -rotate-[30deg] origin-bottom-left bg-blackLight"></div>
);
const LEFT_ARM = (
  <div className="w-[80px] h-[10px] absolute top-[135px] right-[10px] rotate-[30deg] origin-bottom-right bg-blackLight"></div>
);
const RIGHT_LEG = (
  <div className="w-[80px] h-[10px] absolute top-[190px] -right-[70px] rotate-[60deg] origin-bottom-left bg-blackLight"></div>
);
const LEFT_LEG = (
  <div className="w-[80px] h-[10px] absolute top-[190px] right-0 -rotate-[60deg] origin-bottom-right bg-blackLight"></div>
);

const BODY_PART = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG ]

type HangmanDrawingProps = {
  numberOfGuesses: number
}
function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PART.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] top-0 right-0 absolute bg-blackLight " />
      <div className="h-[10px] w-[200px] ml-[120px] bg-blackLight" />
      <div className="h-[350px] w-[10px] ml-[120px] bg-blackLight " />
      <div className="h-[10px] w-[200px] ml-6 bg-blackLight" />
    </div>
  );
}

export default HangmanDrawing;

import { useState, useRef } from "react";

// export default function App() {
//   const x = useRef(5);

//   const handleClick = () => {
//     x.current++;
//     // console.log(x);
//   };
//   console.log(x);
//   return (
//     <div className="App">
//       <button onClick={handleClick}> Click me - {x.current} </button>
//     </div>
//   );
// }

// export default function App() {
//   const inputref = useRef(null);
//   const handleClick = () => {
//     inputref.current.focus();
//     console.log(inputref.current.value);
//   };
//   return (
//     <div className="App">
//       <input ref={inputref} placeholder="write motu" />
//       <button onClick={handleClick}> click me </button>
//     </div>
//   );
// }

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, sethrs] = useState(0);
  let timerIdRef = useRef("");
  const handleStartClick = () => {
    timerIdRef.current = setInterval(() => {
      setSec((prev) => {
        prev = prev + 1;
        if (prev > 58) {
          prev = 0;
          setMin((prevmin) => {
            prevmin = prevmin + 1;
            if (prevmin > 58) {
              prevmin = 0;
              sethrs((prevhrs) => prevhrs + 1);
            }
            return prevmin;
          });
        }
        return prev;
      });
    }, 1000);
  };

  const handleStopClick = () => {
    console.log(timerIdRef);
    clearInterval(timerIdRef.current);
  };
  const handleResetClick = () => {
    clearInterval(timerIdRef.current);
    setMin(0);
    setSec(0);
    sethrs(0);
  };
  return (
    <div className="App">
      <p>
        {hrs < 10 ? `0${hrs}` : hrs} : {min < 10 ? `0${min}` : min} :{" "}
        {sec < 10 ? `0${sec}` : sec}
      </p>
      <button onClick={handleStartClick}> Start </button>
      <button onClick={handleStopClick}> Stop </button>
      <button onClick={handleResetClick}> Reset </button>
    </div>
  );
}

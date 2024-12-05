import { useState } from "react";

const App = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  const startStopWatch = () => {
    const time = setInterval(() => {
      setSeconds((count) => count + 1);
      // console.log(sec);
    }, 1000);
    setTimer(time);
  };
  const stopStopWatch = () => {
    clearInterval(timer);
  };
  const resetStopWatch = () => {
    clearInterval(timer);
    setSeconds(0);
    setHour(0);
    setMin(0);
    setTimer(0);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <h2>Timer</h2>
      <h3>
        {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}:
        {sec < 10 ? `0${sec}` : sec}
      </h3>
      <div className="buttons">
        <button onClick={startStopWatch}>START</button>
        <button onClick={stopStopWatch}>STOP</button>
        <button onClick={resetStopWatch}>RESET</button>
      </div>
    </div>
  );
};

export default App;

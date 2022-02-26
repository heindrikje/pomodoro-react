import React, { useState } from "react";
import CompoundTimer from "./CompoundTimer";
import "./Timer.css";

export default function TimerCard() {
  let [initialTime, setInitialTime] = useState(25 * 60000);

  function pomodoroInterval(event) {
    event.preventDefault();
    setInitialTime(25 * 60000);
  }

  function shortBreakInterval(event) {
    event.preventDefault();
    setInitialTime(5 * 60000);
  }

  function longBreakInterval(event) {
    event.preventDefault();
    setInitialTime(20 * 60000);
  }

  return (
    <div className="TimerCard">
      <div className="card">
        <div className="row">
          <button
            className="col upper-row-button"
            id="pomodoro-button"
            onClick={pomodoroInterval}
          >
            Pomodoro
          </button>
          <button
            className="col upper-row-button"
            id="short-break-button"
            onClick={shortBreakInterval}
          >
            Short Break
          </button>
          <button
            className="col upper-row-button"
            id="long-break-button"
            onClick={longBreakInterval}
          >
            Long Break
          </button>
        </div>
        <CompoundTimer initialTime={initialTime} />
      </div>
    </div>
  );
}

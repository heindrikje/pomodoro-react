import React from "react";
import useCountDown from "react-countdown-hook";
import "./Timer.css";

export default function Timer() {
  const initialTime = 25 * 60000;
  const interval = 1000;
  const [timeLeft, actions] = useCountDown(initialTime, interval);

  return (
    <div className="Timer">
      <div className="card">
        <div className="row">
          <button className="col upper-row-button" id="pomodoro-button">
            Pomodoro
          </button>
          <button className="col upper-row-button" id="short-break-button">
            Short Break
          </button>
          <button className="col upper-row-button" id="long-break-button">
            Long Break
          </button>
        </div>
        <div className="countdown" id="countdown">
          {timeLeft / 1000}
        </div>
        <div className="row">
          <button
            onClick={() => actions.start()}
            className="col start-button"
            id="start-button"
          >
            Start
          </button>
          <button
            onClick={() => actions.pause()}
            className="col pause-button"
            id="pause-button"
          >
            Pause
          </button>
          <button
            onClick={() => actions.resume()}
            className="col resume-button"
            id="resume-button"
          >
            Resume
          </button>
          <button
            onClick={() => actions.reset()}
            className="col reset-button"
            id="reset-button"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

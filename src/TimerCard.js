import React, { useState } from "react";
import Timer from "react-compound-timerv2";
import "./Timer.css";

export default function TimerCard() {
  let [initialTime, setInitialTime] = useState(25 * 60000);

  function pomodoroInterval(event) {
    event.preventDefault();
    setInitialTime = 25 * 60000;
  }

  function shortBreakInterval(event) {
    event.preventDefault();
    setInitialTime = 5 * 60000;
    console.log(initialTime);
  }

  function longBreakInterval(event) {
    event.preventDefault();
    setInitialTime = 20 * 60000;
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
        <div key={initialTime}>
          <Timer
            initialTime={initialTime}
            startImmediately={false}
            direction="backward"
          >
            {({ start, resume, pause, reset }) => (
              <React.Fragment>
                <div className="countdown" id="countdown">
                  <Timer.Minutes />:
                  <Timer.Seconds
                    formatValue={(text) =>
                      text.toString().length > 1 ? text : "0" + text
                    }
                  />
                </div>
                <div className="row">
                  <button
                    className="col start-button"
                    id="start-button"
                    onClick={start}
                  >
                    Start
                  </button>
                  <button
                    className="col pause-button"
                    id="pause-button"
                    onClick={pause}
                  >
                    Pause
                  </button>
                  <button
                    className="col resume-button"
                    id="resume-button"
                    onClick={resume}
                  >
                    Resume
                  </button>
                  <button
                    className="col reset-button"
                    id="reset-button"
                    onClick={reset}
                  >
                    Reset
                  </button>
                </div>
              </React.Fragment>
            )}
          </Timer>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Timer from "react-compound-timerv2";

export default function CompoundTimer(props) {
  return (
    <div className="CompoundTimer" key={props.initialTime}>
      <Timer
        initialTime={props.initialTime}
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
  );
}

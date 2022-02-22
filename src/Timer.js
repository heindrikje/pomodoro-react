import React from "react";
import "./Timer.css";

export default function Timer() {
  return (
    <div className="Timer">
      <div class="card">
        <div class="row">
          <button class="col upper-row-button" id="pomodoro-button">
            Pomodoro
          </button>
          <button class="col upper-row-button" id="short-break-button">
            Short Break
          </button>
          <button class="col upper-row-button" id="long-break-button">
            Long Break
          </button>
        </div>
        <div class="countdown" id="countdown">
          25:00
        </div>
        <div class="row">
          <button class="col start-button" id="start-button">
            Start
          </button>
          <button class="col stop-button" id="stop-button">
            Stop
          </button>
          <button class="col reset-button" id="reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Explanation.css";

export default function Explanation() {
  return (
    <div className="Explanation">
      <strong className="caption-how">How it works:</strong>
      <ol>
        <li>
          <span className="emoji">📝</span> Write down the task(s) you want to
          accomplish.
        </li>
        <li>
          <span className="emoji">⏱</span> Set the pomodoro timer.
        </li>
        <li>
          <span className="emoji">🧑‍💻</span> Work on the task. Don't get
          distracted, you can do this!
        </li>
        <li>
          <span className="emoji">😌</span> Stop working when the time is up and
          take a short break (typically 5 minutes).
        </li>
        <li>
          <span className="emoji">🔁</span> Go back to Step 2 and repeat.
        </li>
        <li>
          <span className="emoji">🏃🏽‍♀️ 🍎 🛁</span> After four pomodori are done,
          take a long break (typically 20 minutes).
        </li>
      </ol>
      <a
        href="http://3.249.194.220/download/pomodoro-technique.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="caption-why"
      >
        Why it works:
      </a>
      <p className="explanation-paragraph">
        The stages of planning, tracking, recording, processing and visualizing
        are fundamental to the technique. In the planning phase, tasks are
        prioritized by recording them in a To-do List, enabling users to
        estimate the effort they will require. As pomodoros are completed, they
        are recorded, adding to a sense of accomplishment and providing raw data
        for subsequent self-observation and improvement.
      </p>
    </div>
  );
}

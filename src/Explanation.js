import React from "react";

export default function Explanation() {
  return (
    <div className="Explanation">
      <div className="caption-how">How it works:</div>
      <ol>
        <li>Write down the task you want to accomplish.</li>
        <li>Set the pomodoro timer (typically for 25 minutes).</li>
        <li>Work on the task.</li>
        <li>
          Stop working when the time is up and take a short break (typically 5
          minutes).
        </li>
        <li>Go back to Step 2 and Repeat.</li>
        <li>
          After four pomodori are done, take a long break (typically 20
          minutes).
        </li>
      </ol>
      <a
        href="http://3.249.194.220/download/pomodoro-technique.pdf"
        target="_blank"
        rel="noopener noreferrer"
        classname="caption-why"
      >
        Why it works:
      </a>
      <p>
        The stages of planning, tracking, recording, processing and visualizing
        are fundamental to the technique. In the planning phase, tasks are
        prioritized by recording them in a "To Do Today" list, enabling users to
        estimate the effort they will require. As pomodoros are completed, they
        are recorded, adding to a sense of accomplishment and providing raw data
        for subsequent self-observation and improvement.
      </p>
    </div>
  );
}

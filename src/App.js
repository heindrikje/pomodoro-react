import "./App.css";
import Timer from "./Timer";
import Explanation from "./Explanation";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Pomodoro Timer</h1>
        <h2>The Timer for Your Perfect Work Routine</h2>
        <Timer />
        <Explanation />
        <footer>
          <a
            href="https://github.com/heindrikje/pomodoro-react"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Open-source code
          </a>{" "}
          by Heindrikje Kuhs
        </footer>
      </div>
    </div>
  );
}

/** @format */

import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p className="github-link">
          This is an open-sourced project built by{" "}
          <a
            href="https://github.com/MaxYeats/react-weather"
            title="link to Melissa's GitHub project page"
            target="_blank"
            rel="noreferrer"
          >
            Melissa Tseng
          </a>
          .
        </p>
      </header>
    </div>
  );
}

export default App;

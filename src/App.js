/** @format */

import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React World!</h1>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;

import logo from "../logo.svg";
import { AddDocSample } from "./AddDocSample";
import { AddCities } from "./AddCities";
import { ReadCities } from "./ReadCities.js";

import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Hello World!</div>
        </p>
        <AddDocSample />
        <AddCities />
        <ReadCities />
      </header>
    </div>
  );
}

export default App;

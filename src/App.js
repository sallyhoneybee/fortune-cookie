import "./App.css";
import Cookie from "./Cookie/Cookie";
import header from "./header.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="header" src={header} alt="" />
        <Cookie />
      </header>
    </div>
  );
}

export default App;

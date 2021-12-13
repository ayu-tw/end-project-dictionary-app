import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project is coded by{" "}
          <a href="https://loving-mcnulty-cc94fa.netlify.app/">An-Yu Huang</a>{" "}
          and is{" "}
          <a href="https://github.com/ayu-tw/end-project-dictionary-app/">
            opened-source.
          </a>
        </footer>
      </div>
    </div>
  );
}

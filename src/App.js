import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row ">
            <div className="col App-logo ">
              <i className="fas fa-book-reader "> </i>{" "}
              <i className="fas fa-sort-alpha-down"></i>
            </div>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project is coded by{" "}
          <a
            href="https://loving-mcnulty-cc94fa.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            An-Yu Huang
          </a>{" "}
          👩🏻 and is opened-source on
          <a
            href="https://github.com/ayu-tw/end-project-dictionary-app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          plus hosting on Netlify.
        </footer>
      </div>
    </div>
  );
}

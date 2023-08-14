import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>kristal1</h1>
      <h1>kristal2</h2>
      <h1>kristal1</h1>
      <h1>kristal1</h1>
      <h1>kristal1</h1> */}

      <form><label>
        Name:
        <input type="text" name="name"/>
        </label>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <nav>
          <h2>Navbar Feature</h2>
          <a>Home</a>
          <a>About</a>
          <a>Details</a>
          <a>Address</a>
        </nav>
      </header>
      
    </div>
  );
}

export default App;

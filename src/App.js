import logo from './logo.svg';
import './App.css';
import Signin from './attribute/Signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Signin/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now here
        </a>
      </header>
    </div>
  );
}

export default App;

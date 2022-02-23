// import logo from './logo.svg';
import './App.css';

import './components/RegistrationForm.jsx';
// import './components/Registration.css';
import RegistrationForm from './components/RegistrationForm.jsx';
import Admin from './components/Admin.js';

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
    <Admin/>
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
    </div>
  );
}

export default App;

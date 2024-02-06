import { getFullYear, getFooterCopy } from './utils'
import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <section className="form-input">
          <section className="email-input">
          <label>
            Email:
            <input type="email" name="email" id="email" />
          </label>
          </section>
          <section className="password-input">
          <label>
            password:
            <input type="password" name="password" id="password" />
          </label>
          </section>
          <button>OK</button>
        </section>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
    </>
  );
}

export default App;

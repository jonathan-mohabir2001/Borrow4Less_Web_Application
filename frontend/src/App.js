import './App.css';
import Landing from './components/images/Landing.svg';

// Landing Page Component

/*
One main landing screen with two buttons to go to 
the login page or the signup page. 
*/
function App() {
  return (
    <div className="landing-page-main">
      <div className="grow-money-image">
        {' '}
        <img src={Landing} alt="Landing Image" className="landing-image" />
      </div>

      <div className="invest-money-section">
        <h1>Invest Your Money</h1>
      </div>

      <div>
        <p className="landing-page-description">
          Get acces to risk free investments that will multiple your income and
          pay high returns in few months.
        </p>
      </div>

      <div className="buttons-section">
        <button className="create-acc-button">CREATE YOUR ACCOUNT</button>
        <button className="login-acc-button">LOGIN INTO YOUR ACCOUNT </button>
      </div>
    </div>
  );
}

export default App;

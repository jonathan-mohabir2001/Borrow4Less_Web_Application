import './App.css';
// Landing Page Component

/*
One main landing screen with two buttons to go to 
the login page or the signup page. 
*/
function App() {
  return (
    <div>
      <div className="grow-money-image">
        <h2>Place Image here</h2>
      </div>
      <div>
        <h1>Invest Your Money</h1>
      </div>
      <div>Toggle Bars Here</div>

      <div>
        <p>
          Get acces to risk free investments that will multiple your income and
          pay high returns in few months.
        </p>
      </div>

      <div>
        <button>CREATE YOUR ACCOUNT</button>
        <button>LOGIN INTO YOUR ACCOUNT </button>
      </div>
    </div>
  );
}

export default App;

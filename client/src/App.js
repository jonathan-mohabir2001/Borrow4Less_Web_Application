import './App.css';
import { Routes, Route } from 'react-router-dom';
// Children of BrowserRouter -- index.js conatains parent.

//External Components Imported For React Router
import BorrowMoneyEasy from './components/landingcomponents/BorrowMoneyEasy';
import InvestMoney from './components/landingcomponents/InvestMoney';
import UserSelection from './components/landingcomponents/UserSelection';
import WithdrawDeposit from './components/landingcomponents/WithdrawDeposit';

import SignIn from './components/accountcomponents/SignIn';
import SignUp from './components/accountcomponents/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InvestMoney />}></Route>
        <Route path="/landing-borrow" element={<BorrowMoneyEasy />}></Route>
        <Route
          path="/landing-withdraw-deposit"
          element={<WithdrawDeposit />}
        ></Route>
        <Route
          path="/landing-user-selection"
          element={<UserSelection />}
        ></Route>

        <Route path="/signIn" element={<SignIn />}></Route>

        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;

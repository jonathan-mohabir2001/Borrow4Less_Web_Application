import React from 'react';

import LandingImage03 from './images/LandingImage03.svg';

function WithdrawDeposit() {
  return (
    <div className="container">
      <section>
        <img
          src={LandingImage03}
          alt="Withdraw Deposit"
          className="withdraw-deposit-image"
        ></img>
      </section>

      <section>
        <header>
          <h2>Withdraw and Deposit money</h2>
        </header>
      </section>

      <section>
        <p>
          With just a click, you can withdraw or deposit your funds at any point
          in time without stress.
        </p>
      </section>

      <section className="buttons-section">
        <button className="btn btn-primary">Create Your Account</button>
        <br></br>
        <button className='btn btn-primary"'> Login into your account</button>
      </section>
    </div>
  );
}

export default WithdrawDeposit;

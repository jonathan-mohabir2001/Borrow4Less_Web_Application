import React from 'react';
import { Link } from 'react-router-dom';
import LandingImage03 from './images/LandingImage03.svg';

function WithdrawDeposit() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <section id="image-section" className="text-center mb-5">
        <img
          src={LandingImage03}
          alt="Withdraw Deposit"
          className="withdraw-deposit-image"
        ></img>
      </section>

      <section id="header-section" className="text-center mb-3">
        <header>
          <h2>Withdraw and Deposit money</h2>
        </header>
      </section>

      <section id="text-section" className="text-center mb-5">
        <p>
          With just a click, you can withdraw or deposit your funds at any point
          in time without stress.
        </p>
      </section>
      <section
        id="button-section"
        className="buttons-section d-flex flex-column align-items-center"
      >
        <Link to="/signUp" className="btn btn-primary mb-3">
          Create Your Account
        </Link>
        <Link
          to="/signIn"
          className="btn btn-primary"
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Login into your account
        </Link>
      </section>
    </div>
  );
}

export default WithdrawDeposit;

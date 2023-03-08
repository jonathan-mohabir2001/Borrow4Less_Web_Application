import React from 'react';
import LandingImage01 from './images/LandingImage01.svg';

import { Link } from 'react-router-dom';

function InvestMoney() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <section>
        <a href="https://borrow4less.ca/">Maling List Sign Up</a>
      </section>

      <section id="image-section" className="text-center mb-5">
        <img
          src={LandingImage01}
          alt="Watering Money Tree"
          className="money-tree-image"
        ></img>
      </section>

      <section id="header-section" className="text-center mb-3">
        <header>
          <h2 className="mb-0">Invest Your Money</h2>
        </header>
      </section>

      <section id="text-section" className="text-center mb-5">
        <p>
          Get access to risk-free investments that will multiply your income and
          pay high returns in a few months
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

export default InvestMoney;

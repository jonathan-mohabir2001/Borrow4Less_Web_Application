import React from 'react';
import LandingImage01 from './images/LandingImage01.svg';

function InvestMoney() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
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
        <button className="btn btn-primary mb-3">Create Your Account</button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: 'white' , color: 'black'}}
        >
          Login into your account
        </button>
      </section>
    </div>
  );
}

export default InvestMoney;

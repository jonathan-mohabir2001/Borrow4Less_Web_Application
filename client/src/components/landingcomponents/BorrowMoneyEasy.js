import React from 'react';

import LandingImage02 from './images/LandingImage02.svg';

function BorrowMoneyEasy() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <section id="image-section" className="text-center mb-5">
        <img
          src={LandingImage02}
          alt="Borrow Money Easy"
          className="borrow-money-image"
        ></img>
      </section>
      <section id="header-section" className="text-center mb-3">
        <header>
          <h2>Borrow money with ease</h2>
        </header>
      </section>
      <section id="text-section" className="text-center mb-5">
        <p>
          Borrow money with ease for your multiple purposes and pay back at the
          appropriate time without stress
        </p>
      </section>

      <section
        id="button-section"
        className="buttons-section d-flex flex-column align-items-center"
      >
        <button className="btn btn-primary mb-3">Create Your Account</button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Login into your account
        </button>
      </section>
    </div>
  );
}

export default BorrowMoneyEasy;

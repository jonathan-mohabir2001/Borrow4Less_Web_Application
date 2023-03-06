import React from 'react';

import LandingImage02 from './images/LandingImage02.svg';

function BorrowMoneyEasy() {
  return (
    <div className="container">
      <section>
        <img
          src={LandingImage02}
          alt="Borrow Money Easy"
          className="borrow-money-image"
        ></img>
      </section>
      <section>
        <header>
          <h2>Borrow money with ease</h2>
        </header>
      </section>
      <section>
        <p>
          Borrow money with ease for your multiple purposes and pay back at the
          appropriate time without stress
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

export default BorrowMoneyEasy;

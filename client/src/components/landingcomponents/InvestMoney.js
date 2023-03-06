import React from 'react';

import LandingImage01 from './images/LandingImage01.svg';

function InvestMoney() {
  return (
    // let all components respond to the screen size, have content centered oriented
    <div className="container ">
      <section>
        <img
          src={LandingImage01}
          alt="Watering Money Tree"
          className="money-tree-image"
        ></img>
      </section>

      <section>
        <header>
          <h2>Invest Your Money</h2>
        </header>
      </section>
      <section>
        <p>
          Get accesss to risk free investments that will multiply your income
          and pay high returns in few months
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

export default InvestMoney;

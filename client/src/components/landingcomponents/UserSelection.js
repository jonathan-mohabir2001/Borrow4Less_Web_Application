import React from 'react';

import BorrowerImage from './images/BorrowerImage.svg';
import LenderImage from './images/LenderImage.svg';

import { Link } from 'react-router-dom';

function UserSelection() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <section className="title-user-selection">
        <header>
          <h2>Sign Up as A </h2>
        </header>
      </section>

      <section className="types-of-users-images">
        <div>
          <div className="col">
            <img
              src={BorrowerImage}
              alt="Borrower"
              className="borrower-image"
            ></img>
          </div>
          <br></br>
          <br></br>
          <div className="col">
            <img src={LenderImage} alt="Lender" className="lender-image"></img>
          </div>
        </div>
      </section>

      <header className="bottom-section">
        <h4>OR</h4>
      </header>

      <section className="user-selection-login">
        <Link to="/signIn" className="btn btn-primary">
          Login into your account
        </Link>
      </section>
    </div>
  );
}

export default UserSelection;

import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarUserActionsSignin extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  signOut = () => console.info('user has signed out.');

  render() {
    return (
      <ul
        className="navbar-actionSection-upper-actions-signedIn"
      >
        <li className="my-account-title sweep-right">
          <Link to={'/my_account'} className="navbar-userActions-myaccount-title-link">
            My Account
          </Link>
        </li>
        <li className="checkout-title sweep-right">
          <Link to={'/checkout'} className="navbar-userActions-checkout-title-link">
            Checkout
          </Link>
        </li>
        <li className="sign-out-title sweep-right">
          <a
            className="navbar-userActions-signOut-title-button"
            onClick={(e) => {
              e.preventDefault();
              console.warn('Sing out user!!!');
            }}
          >Sign Out</a>
        </li>
      </ul>

    );
  }
}

export default NavbarUserActionsSignin;

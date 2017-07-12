import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  BreadCrumb,
  ShoppingCartWeb,
  ShoppingCartMobile,
  ShoppingCartWebProductRow,
  ShoppingCartMobileProductCard,
} from './component.imports';

const { func, bool, string, number, arrayOf, shape, objectOf, any } = PropTypes;

class ShoppingCart extends Component {
  static propTypes = {
    push: func.isRequired,
    mobileActive: bool.isRequired,
    taxRate: number.isRequired,
    loggedIn: bool.isRequired,
    userCart: arrayOf(
      shape({
        qty: number,
        strength: number,
        product: string,
      }),
    ),
    guestCart: arrayOf(
      shape({
        _id: string,
        qty: number,
        strength: number,
        userId: string,
        product: objectOf(any),
      }),
    ),
  }
  static defaultProps = {
    userCart: null,
    guestCart: null,
  }
  constructor(props) {
    super(props);

    this.state = {
      taxes: 0,
      grandTotal: 0,
      mobileActive: props.mobileActive,
    };
  }

  componentWillReceiveProps({ mobileActive, taxRate }) {
    const { taxes, grandTotal } = this.calcProductAnalysis();

    if (this.state.mobileActive !== mobileActive) {
      this.setState({ mobileActive, taxes, grandTotal });
    }
    if (this.state.taxRate !== taxRate) {
      this.setState({ taxRate, taxes, grandTotal });
    }
  }

  routerPush = (e) => {
    let slug = e.target.dataset.slug;

    if (!slug) slug = e.target.parentNode.dataset.slug;

    this.props.push(slug);
  }

  /**
  * Function: "calcProductAnalysis"
  * 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
  * 2) Add that the individual subtotal to each juiceObj.
  * 3) Add that amount to the "grandTotal".
  *
  * @param {none} N/A
  *
  * @return {N/A} Set's new state for taxes & grandTotal.
  */
  calcProductAnalysis = () => {
    const { loggedIn, userCart, guestCart } = this.props;
    let grandTotal = 0;
    const juiceItems = loggedIn ? userCart : guestCart;

    juiceItems.forEach((juiceObj) => {
      juiceObj.subTotal = (juiceObj.qty * Number(juiceObj.price));
      console.log('%cjuiceObj.subTotal', 'background:red;', juiceObj.subTotal);
      grandTotal += juiceObj.subTotal;
    });
    const taxes = Number((grandTotal * this.props.taxRate).toFixed(2));
    grandTotal += taxes;
    return ({
      taxes,
      grandTotal,
    });
  }

  /**
  * Function: "renderDeviceCart"
  * 1) Dynamically render device cart based on mobile or web version.
  *
  * @param {none} N/A
  *
  * @return {component} - Return either Web or Mobile version of parent Shopping Cart component.
  */
  renderDeviceCart = (cartItems) => {
    const { grandTotal, taxes } = this.state;
    if (this.props.mobileActive === false) {
      return (
        <ShoppingCartWeb
          taxes={taxes}
          cartItems={cartItems}
          grandTotal={grandTotal}
          renderWebJuices={this.renderJuices}
          routerPush={this.props.push}
        />
      );
    }
    return (
      <ShoppingCartMobile
        taxes={taxes}
        grandTotal={grandTotal}
        cartItems={cartItems}
        renderMobileJuices={this.renderJuices}
        routerPush={this.props.push}
      />
    );
  }

  /**
  * Function: "renderJuices"
  * 1) Depending on view (mobile or web) dynamically assign cart values to repsective components.
  *
  * @param {none} N/A
  *
  * @return {N/A} Return either Web or Mobile version of Shopping Cart child component.
  */
  renderJuices = cartItems => (
    cartItems.map((juiceObj, i) => {
      console.log('juiceObj: ', juiceObj);
      const { grandTotal, taxes } = this.state;

      if (this.state.mobileActive === false) {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${juiceObj.name}`}
            keyNum={i}
            juiceObj={juiceObj}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${juiceObj.name}`}
          keyNum={i}
          taxes={taxes}
          juiceObj={juiceObj}
          grandTotal={grandTotal}
        />
      );
    })
  );

  render() {
    const { loggedIn, userCart, guestCart } = this.props;
    return (
      <div className="shopping-cart-main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Shopping Cart"
        />
        <div className="shopping-cart-main-title">
          <h1>Shopping Cart</h1>
        </div>
        {this.renderDeviceCart(
          loggedIn ? userCart : guestCart,
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ mobile, orders, auth, user }) => ({
  mobileActive: mobile.mobileType || false,
  taxRate: orders.taxRate.totalRate,
  loggedIn: auth.loggedIn || false,
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

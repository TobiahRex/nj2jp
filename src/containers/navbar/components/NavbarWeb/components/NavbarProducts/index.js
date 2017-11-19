import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  ProductsTop,
  ProductsMid,
  ProductsLow,
} from './components';

class NavbarProducts extends React.Component {
  routerPush = (e) => {
    const location = e.target.dataset.slug || e.target.parentNode.dataset.slug || e.target.parentNode.parentNode.dataset.slug;
    this.props.push(location);
  }
  render() {
    return (
      <div className="navbar-big__juice-dropdown">
        <div className="juice-dropdown__floating-juice-container" data-ix="nav-b-juice-hover">
          <ProductsTop />
          <ProductsMid
            popularProducts={this.props.popularProducts}
            routerPush={this.routerPush}
          />
          <ProductsLow routerPush={this.routerPush} />
          <div className="floating-juice-container__nav-b-menu-box" />
        </div>
      </div>
    );
  }
}
const { shape, string, arrayOf, func } = PropTypes;
NavbarProducts.propTypes = {
  popularProducts: arrayOf(
    shape({
      _id: string,
      product: shape({
        title: string,
        images: arrayOf(
          shape({
            purpose: string,
            url: string,
          })),
        slug: string,
      }),
    }),
  ),
  push: func.isRequired,
};
NavbarProducts.defaultProps = {
  popularProducts: [],
};

const NavbarProductsWithState = connect(({ products }) => ({
  popularProducts: products.popularProducts,
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(NavbarProducts);

export default NavbarProductsWithState;

import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


export default function ExpressCheckout() {
  return (
    <div className="checkout__container">
      <div className="checkout__breadcrumb--container">
        <ul className="list">
          <li className="path">
            <Link className="path__link" to="/">Home</Link>
            <FontAwesome
              className="path__link--right-chevron"
              name="angle-right"
            />
          </li>
          <li className="path">
            Express Checkout
          </li>
        </ul>
      </div>
      <div className="checkout__title">
        <h1>Express Checkout</h1>
      </div>
      <div className="checkout__body grid" data-masonry='{ "itemSelector": ".checkout__grid", "columnWidth": 340, "gutter": 22 }'>
        <div className="checkout__grid">
          <div className="checkout__billing">
            <div className="title">
              <h3>Billing Address</h3>
            </div>
            <div className="input__row">
              <div className="input__row--first-name">
                <p>First Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
              <div className="input__row--last-name">
                <p>Last Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--email">
                <p>Email <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-1">
                <p>Address Line 1 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-2">
                <p>Address Line 2 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--country">
                <p>Country <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--prefecture">
                <p>Prefecture <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--postal-code">
                <p>Postal Code <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--city">
                <p>City <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--phone">
                <p>Phone / Cell <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--same-as-billing">
                <input
                  type="checkbox"
                  onChange={e => console.log(e.target.value)}
                />
                <p>Use same address for shipping.<span className="required">*</span></p>
              </div>
            </div>
          </div>
          <div className="checkout__shipping">
            <div className="title">
              <h3>Shipping Address</h3>
            </div>
            <div className="input__row">
              <div className="input__row--first-name">
                <p>First Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
              <div className="input__row--last-name">
                <p>Last Name</p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--email">
                <p>Email <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-1">
                <p>Address Line 1 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--address-line-2">
                <p>Address Line 2 <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--country">
                <p>Country <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--prefecture">
                <p>Prefecture <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--postal-code">
                <p>Postal Code <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--city">
                <p>City <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--phone">
                <p>Phone / Cell <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__grid">
          <div className="checkout__shipping-method">
            <div className="title">
              <h3>Shipping Method</h3>
            </div>
            <div className="input__row">
              <div className="input__row--free-shipping">
                <input
                  type="checkbox"
                  onChange={e => console.log(e.target.value)}
                />
                <p>Use same address for shipping.<span className="required">*</span></p>
              </div>
            </div>
          </div>
          <div className="checkout__credit-card">
            <div className="title">
              <h3>Credit Card Information</h3>
            </div>

            <div className="input__row">
              <div className="input__row--name-on-card">
                <p>Name on Card <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--cc-type">
                <p>Credit Card Type <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--cc-number">
                <p>Credit Card Number <span className="required">*</span></p>
                <input
                  type="text"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
            </div>

            <div className="input__row">
              <div className="input__row--exp-date">
                <p>Expiration Date <span className="required">*</span></p>
                <div className="input__container--exp-month">
                  <select className="input--select">
                    <option value="Month" className="input--option">Month</option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="02 - February" className="input--option">
                      02 - February
                    </option>
                    <option value="03 - March" className="input--option">
                      03 - March
                    </option>
                    <option value="04 - April" className="input--option">
                      04 - April
                    </option>
                    <option value="05 - May" className="input--option">
                      05 - May
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                    <option value="01 - January" className="input--option">
                      01 - January
                    </option>
                  </select>
                </div>
                <div className="input__container--exp-year">
                  <select className="input--select">
                    <option value="Month" className="input--option">Year</option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2018" className="input--option">
                      2017
                    </option>
                    <option value="2019" className="input--option">
                      2017
                    </option>
                    <option value="2020" className="input--option">
                      2017
                    </option>
                    <option value="2021" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                    <option value="2017" className="input--option">
                      2017
                    </option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div className="checkout__order-review">
            <h3>Order Review</h3>
          </div>
        </div>
        <div className="checkout__grid">
          <div className="checkout__grand-total ">
            <h3>Grand Total</h3>
          </div>
          <div className="checkout__error-dialogue ">
            <h3>Error</h3>
          </div>
          <div className="checkout__back-home-btn ">
            <button>Back To Homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
}

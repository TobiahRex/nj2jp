import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileUserActionsNotSignedIn from './navbar_mobile_userActions_notSignedIn';
import NavbarMobileUserActionsSignedIn from './navbar_mobile_userActions_signedIn';


/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"
3. Remove UUID as dummy generator.
*/

class NavbarMobileActions extends PureComponent {
  static defaultProps = {
    activeUser: null,
  }
  static propTypes = {
    activeUser: PropTypes.bool,
    logoutUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeUser: this.props.activeUser,
    };
  }

  logoutUser = () => this.props.logoutUser;

  render() {
    return (
      <div className="navbar__mobile--actions">
        <NavbarMobileUserActionsNotSignedIn />
        <NavbarMobileUserActionsSignedIn
          activeUser={this.props.activeUser}
          logoutUser={this.props.logoutUser}
        />
      </div>
    );
  }
}

export default NavbarMobileActions;

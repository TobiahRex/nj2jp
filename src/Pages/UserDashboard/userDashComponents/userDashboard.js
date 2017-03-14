import React, { PropTypes } from 'react';
import UserHomeDash from './userDashboard_home/userHomeDash';
import UserAddressBook from './userDashboard_addressBook/userAddressBook';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserDashboard({ location }) {
  return (
    <div className="userdash--main">
      <div className="userdash--container">
        <UserHomeDash location={location} />
      </div>
    </div>
  );
}
UserDashboard.propTypes = propTypes;
export default UserDashboard;

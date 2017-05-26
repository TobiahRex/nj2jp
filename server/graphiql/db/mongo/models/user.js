/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';
import db from '../connection';

userSchema.statics.loginOrRegister = args =>
new Promise((resolve, reject) => {
  const auth0Id = args.auth0Id;
  const loginType = args.loginType;
  delete args.auth0Id;
  delete args.loginType;

  User.findOne({ 'authentication.auth0Identities.user_id': auth0Id })
  .exec()
  .then((dbUser) => {
    if (!dbUser) return User.registerUser(args);
    return User.loginUser(loginType, dbUser, args);
  })
  .then(resolve)
  .catch(error => reject({ problem: error }));
});

userSchema.statics.loginUser = (loginType, dbUser, userObj) =>
new Promise((resolve) => {
  console.log('Found Existing User.\n');
  dbUser.authentication.totalLogins += 1;
  dbUser.authentication.logins.push(userObj.authentication.logins.pop());
  dbUser.contactInfo.location = { ...userObj.contactInfo.location };
  dbUser.shopping.cart = [...userObj.shopping.cart];
  dbUser.socialProfileBlob[loginType] = userObj.socialProfileBlob[loginType];

  dbUser.save({ validateBeforeSave: true })
  .then(resolve);
});

userSchema.statics.registerUser = userObj =>
new Promise((resolve, reject) => {
  const {
    name,
    pictures,
    authentication,
    authenticationLogins,
    authenticationAuth0Identities,
    contactInfo,
    contactInfoLocation,
    contactInfoDevices,
    contactInfoSocialNetworks,
    shopping,
    shoppingCart,
    permissions,
    userStory,
    socialProfileBlob,
  } = userObj;

  bbPromise.fromCallback(cb => User.create({
    name,
    pictures,
    authentication: {
      ...authentication,
      logins: { ...authenticationLogins },
      auth0Identities: { ...authenticationAuth0Identities },
    },
    contactInfo: {
      ...contactInfo,
      location: { ...contactInfoLocation },
      devices: { ...contactInfoDevices },
      socialNetworks: { ...contactInfoSocialNetworks },
    },
    shopping: {
      ...shopping,
      cart: { ...shoppingCart },
    },
    permissions,
    userStory,
    socialProfileBlob,
  }, cb))
  .then((newUser) => {
    console.log('\nNew User created!: ', newUser._id, '\nName: ', newUser.name.display, '\n');
    resolve(newUser);
  })
  .catch(reject);
});

userSchema.statics.addToMemberCart = ({ userId, qty, strength, product }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart.push({
      qty,
      strength,
      product,
    });
    return dbUser.save({ validateBeforeSave: true });
  })
  .then((savedUser) => {
    console.log('Saved product to the User\'s Shopping Cart!');
    resolve(savedUser);
  })
  .catch(error => reject({
    problem: `Could not save to the Users shopping cart.
    args: {
      userId: ${userId},
      qty: ${qty},
      strength: ${strength},
      product: ${product},
    }
    Mongo Error: ${error}`,
  }));
});

userSchema.statics.updateToMemberCart = ({ userId, qty, strength, product }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart
    .filter(cartItem => cartItem.product !== product)
    .push({ qty, strength, product });
    return dbUser.save({ validateBeforeSave: true });
  })
  .then(({ shopping }) => {
    console.log('Updated the User\'s Shopping Cart!');
    resolve(shopping);
  })
  .catch((error) => {
    reject({
      problem: `Could not post udpate to the Users shopping cart.
      args: {
        userId: ${userId},
        qty: ${qty},
        strength: ${strength},
        product: ${product},
      }
      Mongo Error: ${error}`,
    });
  });
});
const User = db.model('User', userSchema);

export default User;

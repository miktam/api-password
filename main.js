/*global ApiPassword, SRP, Meteor, beforeEach, after, afterEach */
/*jshint -W020 */

ApiPassword = {
  isPasswordValid: function (username, password) {
    "use strict";

    if (!username || !password) {
      throw new Meteor.Error('Username and password have to be provided');
    }

    var user = Meteor.users.findOne({username: username});
    if (!user) {
      throw new Error('User ' + username + ' not found');
    }

    return validateUser(user, password);
  },
  /**
   * Validate user based on provided options
   * @param options: {username: xxx, password: xxx, email: xxx}
   * password is mandatory
   * one of the attributes - username or email - is mandatory
   * @returns true if password matches, false otherwise
   * @throws exception if mandatory parameters not provided
   */
  validate: function (options) {
    "use strict";

    var username = options.username;
    var password = options.password;
    var email    = options.email;
    var user     = null;

    if (!password) {
      throw new Meteor.Error('Password has to be provided');
    }

    if (!username && !email) {
      throw new Meteor.Error('Username or email have to be provided');
    }

    if (email) {
      user = Meteor.users.findOne({ "emails.address" : email});
    } else {
      user = Meteor.users.findOne({username: username});
    }
    if (!user) {
      throw new Error('User ' + username + ' not found');
    }

    return validateUser(user, password);
  }

};

function validateUser(user, password) {
  "use strict";
  if (!user.services || !user.services.password) {
    throw new Error('User has no password set');
  }

  if (!user.services.password.srp) {

    // Meteor 0.8.2+
    var resultOfInvocation = Accounts._checkPassword(user, password);
    if (resultOfInvocation.error) {
      return false;
    } else {
      return true;
    }

  } else {

    // pre Meteor 0.8.2
    var verifier = user.services.password.srp;
    var newVerifier = SRP.generateVerifier(password, {identity: verifier.identity, salt: verifier.salt});
    if (verifier.verifier === newVerifier.verifier) {
      return true;
    }
  }
  return false;
}
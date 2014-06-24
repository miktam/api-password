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
};
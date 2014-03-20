ApiPassword = {
  validateUserPassword: function (username, password) {

    var user = Meteor.users.findOne({username: username});

    if (!user) {
      throw new Error('User ' + username + ' not found');
    }

    if (!user.services || !user.services.password || !user.services.password.srp) {
      throw new Error('User has no password set');
    }

    var verifier = user.services.password.srp;
    var newVerifier = SRP.generateVerifier(password, {identity: verifier.identity, salt: verifier.salt});

    if (verifier.verifier !== newVerifier.verifier) {
      throw new Error('Password is incorrect');
    }

    return 0;
  }
};
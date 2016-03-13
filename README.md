# Server side user/email/password validation for Meteor

Module allows server side authentication in Meteor, based on username/email and password

## Installation
`meteor add miktam:api-password`

## Usage

```
  // ApiPassword.validate takes an object as parameter: {username, email, password}
  // password is mandatory
  // either username or email is mandatory
  try {
    if (ApiPassword.validate({username: 'username', password: 'password})) {
      console.log('password is valid for this user');
    } else {
      console.log('password is not valid');
    }

  } catch (exc) {
      console.log(exc.message);
      // possible causes: 'User is not found', 'User has no password set'
  }

```

## Licence

The MIT License (MIT)

Copyright © 2014, Andrei Karpushonak aka @miktam
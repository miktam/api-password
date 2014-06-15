# Server side user/password validation for Meteor

## Installation
`mrt add api-password`

## Usage

```
  try {
    if (ApiPassword.isPasswordValid(username, password)) {
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

Copyright © 2014, Andrei Karpushonak aka @miktam, http://avrora.io
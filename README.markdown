# ApiPassword for Meteor 0.7.2 and up

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
MIT
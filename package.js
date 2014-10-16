Package.describe({
  summary: 'Server-side username/email/password validation',
  version: '0.4.0',
  name: 'miktam:api-password',
  git: 'https://github.com/avrora/api-password'
});

Package.on_use(function (api, where) {

  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.use('srp', 'server');
  api.add_files(['main.js'], 'server')
  api.export('ApiPassword', 'server');
});




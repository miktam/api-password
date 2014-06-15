Package.describe({
  summary: 'Server-side username/password validation'
});

Package.on_use(function (api, where) {
  api.use('srp', 'server');
  api.add_files(['api_password.js'], 'server')
  api.export('ApiPassword', 'server');
});




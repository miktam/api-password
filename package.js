Package.describe({
  summary: 'Server-side username/password validation',
  version: '0.3.0'
});

Package.on_use(function (api, where) {
  api.use('srp', 'server');
  api.add_files(['main.js'], 'server')
  api.export('ApiPassword', 'server');
});




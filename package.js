Package.describe({
  summary: 'Server-side password validation useful for REST API with Meteor 0.7.2'
});

Package.on_use(function (api, where) {
  api.use('srp', 'server');
  api.add_files(['api_password.js'], 'server')
  api.export('ApiPassword', 'server');
});




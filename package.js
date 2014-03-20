Package.describe({
  summary: "Server-side password validation useful for REST API"
});

Package.on_test(function(api){
  api.use("api-password", "server");
  api.use(["tinytest", "test-helpers"], "server");

  api.add_files("api_password_tests.js", "server");
});

Package.on_use(function (api, where) {
  api.use(["srp"], "server");

  api.add_files(["api_password.js"], "server");

  if (api.export)
    api.export("ApiPassword");
});

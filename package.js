

Package.describe({
  summary: "Twitter API Client"
});

Npm.depends({twit: "2.1.0"});

Package.on_use(function (api) {
  if(api.export) {
    api.export('TwitMaker');
  }
  api.add_files("main.js", "server");
});

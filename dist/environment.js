"use strict";
var App;
(function (App) {
    class Environment {
    }
    Environment.API_BASE_URL = "https://api.quran.com/api/v4";
    Environment.COOKIE_DEFAULT_KEY = "hafalan";
    App.Environment = Environment;
})(App || (App = {}));

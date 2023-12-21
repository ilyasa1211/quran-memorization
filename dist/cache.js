"use strict";
var App;
(function (App) {
    class Cache {
        static save(key, value, cookieKey = this.COOKIE_DEFAULT_KEY) {
            const previousValue = this.getAllValue();
            previousValue[key] = value;
            const addedValue = JSON.stringify(previousValue);
            document.cookie = `${cookieKey}=${addedValue}`;
        }
        static getValue(key, cookieKey = this.COOKIE_DEFAULT_KEY) {
            return this.getAllValue(cookieKey)[key];
        }
        static getAllValue(cookieKey = this.COOKIE_DEFAULT_KEY) {
            var _a;
            const stringValue = (_a = document.cookie
                .split(this.separator)
                .find((row) => row.startsWith(`${cookieKey}=`))) === null || _a === void 0 ? void 0 : _a.split("=")[1];
            return JSON.parse(stringValue !== null && stringValue !== void 0 ? stringValue : "{}");
        }
    }
    Cache.separator = "; ";
    Cache.COOKIE_DEFAULT_KEY = App.Environment.COOKIE_DEFAULT_KEY;
    App.Cache = Cache;
})(App || (App = {}));

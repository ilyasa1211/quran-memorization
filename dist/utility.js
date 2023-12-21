"use strict";
var App;
(function (App) {
    class Utility {
        static indexArrayIncremental(length, startFrom = 1) {
            return new Array(length)
                .fill(null)
                .map((_value, index) => index + startFrom);
        }
        static ShuffleArray(array) {
            return [...array].sort(() => Math.random() - 0.5);
        }
    }
    App.Utility = Utility;
})(App || (App = {}));

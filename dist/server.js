"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var App;
(function (App) {
    class Server {
        static getAyatsByChapter(chapter) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetUrl = `/quran/verses/indopak?chapter_number=${chapter}`;
                const finalUrl = this.BASE_URL + targetUrl;
                let result = yield fetch(finalUrl).then((response) => response.json());
                return result.verses;
            });
        }
        static getListChapters() {
            return __awaiter(this, void 0, void 0, function* () {
                const targetUrl = `/chapters`;
                const finalUrl = this.BASE_URL + targetUrl;
                let result = yield fetch(finalUrl).then((response) => response.json());
                return result.chapters;
            });
        }
        static getChapter(number) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetUrl = `/chapters/${number}`;
                const finalUrl = this.BASE_URL + targetUrl;
                let result = yield fetch(finalUrl).then((response) => response.json());
                return result.chapter;
            });
        }
    }
    Server.BASE_URL = App.Environment.API_BASE_URL;
    App.Server = Server;
})(App || (App = {}));

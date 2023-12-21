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
    class Form {
        static submitChapter(event) {
            return __awaiter(this, void 0, void 0, function* () {
                event.preventDefault();
                App.Html.clearScore();
                const target = event.target;
                const input = target.children[0];
                const chapter = Number(input.value);
                const ayats = yield App.Server.getAyatsByChapter(chapter);
                const list = App.Utility.indexArrayIncremental(ayats.length);
                const shuffleList = App.Utility.ShuffleArray(list);
                const chapterInfo = yield App.Server.getChapter(chapter);
                const chapterIdButton = document.getElementById("chapterIdButton");
                const chapterNameIdButton = document.getElementById("chapterNameIdButton");
                const chapterPageButton = document.getElementById("chapterPageButton");
                const chapterVersesCountButton = document.getElementById("chapterVersesCountButton");
                chapterIdButton.onclick = (event) => {
                    const target = event.target;
                    target.textContent = String(chapterInfo.id);
                };
                chapterNameIdButton.onclick = (event) => {
                    const target = event.target;
                    target.textContent = chapterInfo.name_simple;
                };
                chapterPageButton.onclick = (event) => {
                    const target = event.target;
                    target.textContent = chapterInfo.pages.join("-");
                };
                chapterVersesCountButton.onclick = (event) => {
                    const target = event.target;
                    target.textContent = String(chapterInfo.verses_count);
                };
                App.Cache.save("chapter", chapter);
                App.Html.clear();
                App.Html.create(ayats, shuffleList);
            });
        }
    }
    App.Form = Form;
})(App || (App = {}));

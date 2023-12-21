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
    class Html {
        static clear() {
            const main = document.getElementById("main");
            Array.from(main.children).forEach((child) => {
                child.remove();
            });
            const chapterIdButton = document.getElementById("chapterIdButton");
            const chapterNameIdButton = document.getElementById("chapterNameIdButton");
            const chapterPageButton = document.getElementById("chapterPageButton");
            const chapterVersesCountButton = document.getElementById("chapterVersesCountButton");
            chapterIdButton.textContent = "X";
            chapterNameIdButton.textContent = "X";
            chapterPageButton.textContent = "X";
            chapterVersesCountButton.textContent = "X";
        }
        static create(ayats, list) {
            const main = document.getElementById("main");
            list.forEach((number) => {
                const ayat = ayats[number - 1];
                const container = document.createElement("div");
                const cancel = document.createElement("span");
                const content = document.createElement("span");
                const approve = document.createElement("span");
                const show = document.createElement('span');
                const googleIconClassName = "material-symbols-outlined";
                content.classList.add(..."content mx-auto bg-dark fs-1 text-white".split(" "));
                show.classList.add(..."show bg-dark btn rounded-circle text-white".split(" "), googleIconClassName);
                cancel.classList.add(..."cancel bg-danger btn rounded-circle text-white".split(" "), googleIconClassName);
                approve.classList.add(..."approve bg-success btn rounded-circle text-white".split(" "), googleIconClassName);
                content.textContent = String(number);
                show.textContent = "visibility";
                show.onclick = () => {
                    content.textContent = ayat.text_indopak;
                };
                cancel.textContent = "close";
                cancel.onclick = () => {
                    this.addFalseScoreCounter();
                    this.removeElement(container);
                };
                approve.textContent = "check";
                approve.onclick = () => {
                    this.addTrueScoreCounter();
                    this.removeElement(container);
                };
                container.classList.add(..."d-flex bg-dark p-2 border border-2 mb-2 rounded-3".split(" "));
                container.appendChild(content);
                container.appendChild(show);
                container.appendChild(cancel);
                container.appendChild(approve);
                main.appendChild(container);
            });
        }
        static createOptions() {
            return __awaiter(this, void 0, void 0, function* () {
                const select = document.getElementById("selectChapter");
                const listChapters = yield App.Server.getListChapters();
                const previousSelectedChapter = App.Cache.getValue("chapter");
                listChapters.forEach((chapter) => {
                    const option = document.createElement("option");
                    option.textContent = `${chapter.id}. ${chapter.name_simple}`;
                    option.value = String(chapter.id);
                    if (chapter.id === previousSelectedChapter) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });
            });
        }
        static addFalseScoreCounter(number = 1) {
            const counter = document.getElementById("false-counter");
            counter.textContent = String(Number(counter.textContent) + number);
        }
        static addTrueScoreCounter(number = 1) {
            const counter = document.getElementById("true-counter");
            counter.textContent = String(Number(counter.textContent) + number);
        }
        static removeElement(htmlElement) {
            htmlElement.remove();
        }
        static hideElement(htmlElement) {
            htmlElement.classList.add("d-none");
        }
        static clearScore() {
            const falseCounter = document.getElementById("false-counter");
            const trueCounter = document.getElementById("true-counter");
            falseCounter.textContent = "0";
            trueCounter.textContent = "0";
        }
    }
    App.Html = Html;
})(App || (App = {}));

namespace App {
  export class Html {
    public static clear(): void {
      const main = document.getElementById("main") as HTMLElement;

      Array.from(main.children).forEach((child) => {
        child.remove();
      });

      const chapterIdButton = document.getElementById(
        "chapterIdButton"
      ) as HTMLButtonElement;
      const chapterNameIdButton = document.getElementById(
        "chapterNameIdButton"
      ) as HTMLButtonElement;
      const chapterPageButton = document.getElementById(
        "chapterPageButton"
      ) as HTMLButtonElement;
      const chapterVersesCountButton = document.getElementById(
        "chapterVersesCountButton"
      ) as HTMLButtonElement;

      chapterIdButton.textContent = "X";
      chapterNameIdButton.textContent = "X";
      chapterPageButton.textContent = "X";
      chapterVersesCountButton.textContent = "X";
    }
    public static create(
      ayats: Interface.ResponseVerseses["verses"],
      list: Array<number>
    ): void {
      const main = document.getElementById("main") as HTMLElement;

      list.forEach((number: number) => {
        const ayat = ayats[number - 1];

        const container = document.createElement("div");
        const cancel = document.createElement("span");
        const content = document.createElement("span");
        const approve = document.createElement("span");
        const show = document.createElement('span');

        const googleIconClassName = "material-symbols-outlined";

        content.classList.add(..."content mx-auto bg-dark fs-1 text-white".split(" "));
        
        show.classList.add(
          ..."show bg-dark btn rounded-circle text-white".split(" "),
          googleIconClassName
        );

        cancel.classList.add(
          ..."cancel bg-danger btn rounded-circle text-white".split(" "),
          googleIconClassName
        );
        
        approve.classList.add(
          ..."approve bg-success btn rounded-circle text-white".split(" "),
          googleIconClassName
        );

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

        container.classList.add(
          ..."d-flex bg-dark p-2 border border-2 mb-2 rounded-3".split(
            " "
          )
        );

        container.appendChild(content);
        container.appendChild(show);
        container.appendChild(cancel);
        container.appendChild(approve);

        main.appendChild(container);
      });
    }

    public static async createOptions(): Promise<void> {
      const select = document.getElementById(
        "selectChapter"
      ) as HTMLSelectElement;

      const listChapters = await Server.getListChapters();

      const previousSelectedChapter = Cache.getValue("chapter") as number;

      listChapters.forEach((chapter) => {
        const option = document.createElement("option");
        option.textContent = `${chapter.id}. ${chapter.name_simple}`;
        option.value = String(chapter.id);

        if (chapter.id === previousSelectedChapter) {
          option.selected = true;
        }

        select.appendChild(option);
      });
    }

    public static addFalseScoreCounter(number: number = 1): void {
      const counter = document.getElementById(
        "false-counter"
      ) as HTMLDivElement;

      counter.textContent = String(Number(counter.textContent) + number);
    }

    public static addTrueScoreCounter(number: number = 1): void {
      const counter = document.getElementById("true-counter") as HTMLDivElement;

      counter.textContent = String(Number(counter.textContent) + number);
    }
    public static removeElement(htmlElement: HTMLElement): void {
      htmlElement.remove();
    }
    public static hideElement(htmlElement: HTMLElement): void {
      htmlElement.classList.add("d-none");
    }

    public static clearScore(): void {
      const falseCounter = document.getElementById(
        "false-counter"
      ) as HTMLDivElement;
      const trueCounter = document.getElementById(
        "true-counter"
      ) as HTMLDivElement;

      falseCounter.textContent = "0";
      trueCounter.textContent = "0";
    }
  }
}

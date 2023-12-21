namespace App {
  export class Form {
    public static async submitChapter(event: SubmitEvent): Promise<void> {
      event.preventDefault();
      Html.clearScore();

      const target = event.target as HTMLFormElement;
      const input = target.children[0] as HTMLInputElement;

      const chapter = Number(input.value);
      const ayats = await Server.getAyatsByChapter(chapter);
      const list = Utility.indexArrayIncremental(ayats.length);
      const shuffleList = Utility.ShuffleArray(list);

      const chapterInfo = await Server.getChapter(chapter);

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

      chapterIdButton.onclick = (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        target.textContent = String(chapterInfo.id);
      };
      
      chapterNameIdButton.onclick = (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        target.textContent = chapterInfo.name_simple;
      };
      
      chapterPageButton.onclick = (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        target.textContent = chapterInfo.pages.join("-");
      };
      
      chapterVersesCountButton.onclick = (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        target.textContent = String(chapterInfo.verses_count);
      };

      Cache.save("chapter", chapter);
      Html.clear();
      Html.create(ayats, shuffleList);
    }
  }
}

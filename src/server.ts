namespace App {
  export class Server {
    public static BASE_URL = Environment.API_BASE_URL;

    public static async getAyatsByChapter(chapter: number) {
      const targetUrl = `/quran/verses/indopak?chapter_number=${chapter}`;
      const finalUrl = this.BASE_URL + targetUrl;
      
      let result: Interface.ResponseVerseses = await fetch(finalUrl).then(
        (response: Response) => response.json()
      );

      return result!.verses;
    }

    public static async getListChapters() {
      const targetUrl = `/chapters`;
      const finalUrl = this.BASE_URL + targetUrl;

      let result: Interface.ResponseChapters = await fetch(finalUrl).then(
        (response: Response) => response.json()
      );

      return result.chapters;
    }

    public static async getChapter(number: number) {
      const targetUrl = `/chapters/${number}`;
      const finalUrl = this.BASE_URL + targetUrl;

      let result: Interface.ResponseChapter = await fetch(finalUrl).then(
        (response: Response) => response.json()
      );

      return result.chapter;
    }
  }
}

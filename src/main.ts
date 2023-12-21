namespace App {
  export class Main {
    public static async main(): Promise<void> {
      const form = document.getElementById("submitChapter") as HTMLFormElement;
      form.onsubmit = Form.submitChapter;


      await Html.createOptions();
    }
  }
}

(async () => await App.Main.main())();

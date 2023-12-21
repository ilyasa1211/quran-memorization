namespace App {
  export class Utility {
    public static indexArrayIncremental(
      length: number,
      startFrom: number = 1
    ): Array<number> {
      return new Array(length)
        .fill(null)
        .map((_value: null, index: number) => index + startFrom);
    }

    public static ShuffleArray<T = any>(array: Array<T>): Array<T> {
      return [...array].sort(() => Math.random() - 0.5);
    }
  }
}

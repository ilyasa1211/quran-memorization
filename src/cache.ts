namespace App {
  export class Cache {
    public static separator = "; ";
    public static COOKIE_DEFAULT_KEY = Environment.COOKIE_DEFAULT_KEY;
    public static save(
      key: string,
      value: any,
      cookieKey: string = this.COOKIE_DEFAULT_KEY
    ) {
      const previousValue = this.getAllValue();

      previousValue[key] = value;

      const addedValue = JSON.stringify(previousValue);

      document.cookie = `${cookieKey}=${addedValue}`;
    }

    public static getValue(
      key: string,
      cookieKey: string = this.COOKIE_DEFAULT_KEY
    ) {
      return this.getAllValue(cookieKey)[key];
    }

    public static getAllValue(cookieKey: string = this.COOKIE_DEFAULT_KEY): {
      [k: string]: any;
    } {
      const stringValue = document.cookie
        .split(this.separator)
        .find((row) => row.startsWith(`${cookieKey}=`))
        ?.split("=")[1];

      return JSON.parse(stringValue ?? "{}");
    }
  }
}

export class Description {
  public static isValid(value: string) {
    return value.length >= 0 && value.length <= 255;
  }
}

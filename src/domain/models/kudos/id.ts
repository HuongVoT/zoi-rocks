export class Id {
  private static readonly uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  public static isValid(value: string) {
    return this.uuidRegex.test(value);
  }
}

export default abstract class Swear extends Error {
  abstract readonly statusCode: number;
  abstract readonly errors: { [key: string]: any };

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, Swear.prototype);
  }
}

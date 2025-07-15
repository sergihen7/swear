import Swear from "./Swear";

export default class BadRequestSwear extends Swear {
  private static readonly _statusCode = 400;
  private readonly _code: number;
  private readonly _errors: { [key: string]: any };

  constructor(params?: {
    code?: number;
    message?: string;
    errors?: { [key: string]: any };
  }) {
    const { code, message, errors } = params || {};

    super(message || "Bad Request");
    this._code = code || BadRequestSwear._statusCode;
    this._errors = errors || [];

    Object.setPrototypeOf(this, BadRequestSwear.prototype);
  }

  get statusCode() {
    return this._code;
  }

  get errors() {
    return this._errors;
  }
}

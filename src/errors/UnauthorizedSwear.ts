import Swear from "./Swear";

export default class UnauthorizedSwear extends Swear {
  private static readonly _statusCode = 401;
  private readonly _code: number;
  private readonly _errors: { [key: string]: any };

  constructor(params?: {
    code?: number;
    message?: string;
    errors?: { [key: string]: any };
  }) {
    const { code, message, errors } = params || {};

    super(message || "Unauthorized");
    this._code = code || UnauthorizedSwear._statusCode;
    this._errors = errors || [];

    Object.setPrototypeOf(this, UnauthorizedSwear.prototype);
  }

  get statusCode() {
    return this._code;
  }
  get errors() {
    return this._errors;
  }
}

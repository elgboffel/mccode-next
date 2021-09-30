export interface PageError {
  responseContent: unknown;
  statusCode: number;
  url: string;
}

export class AppError {
  public readonly statusCode: number;
  public readonly error: PageError;

  constructor(error: PageError) {
    this.statusCode = error.statusCode;
    this.error = error;
  }
}

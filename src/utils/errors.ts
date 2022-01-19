class GeneralError extends Error {
    constructor(message: string) {
      super();
      this.message = message;
    }
  
    getStatusCode(): { code: number; status: string } {
      if (this instanceof BadRequest) {
        return { code: 400, status: "Bad Request" };
      }
  
      if (this instanceof NotFound) {
        return { code: 404, status: "Not Found" };
      }
  
      if (this instanceof Unauthorized) {
        return { code: 401, status: "Unauthorized" };
      }
  
      return { code: 500, status: "Internal Server Error" };
    }
  }
  
  class BadRequest extends GeneralError {}
  class NotFound extends GeneralError {}
  class Unauthorized extends GeneralError {}
  
  export { GeneralError, BadRequest, NotFound, Unauthorized };
  
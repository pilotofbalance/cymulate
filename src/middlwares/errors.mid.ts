import { Request, Response, NextFunction } from "express";
import { GeneralError } from "../utils/errors";

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof GeneralError) {
    const { code, status } = err.getStatusCode();
    return res.status(code).json({
      status,
      code,
      message: err.message,
    });
  }

  const code = 500;

  return res.status(code).json({
    status: "Internal Server Error",
    code,
    message: err.message,
  });
};

export { handleErrors };

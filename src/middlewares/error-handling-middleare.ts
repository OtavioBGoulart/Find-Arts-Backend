import { ApplicationError } from "protocols";
import { Request, Response } from "express";
import httpStatus from "http-status"

export function handleApplicationErrors(err: ApplicationError | Error, _req: Request, res: Response) {
  console.log("entrou")
    if (err.name === "CannotEnrollBeforeStartDateError") {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: err.message,
      });
    }
  
    if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send({
        message: err.message,
      });
    }
  
    if (err.name === "InvalidCredentialsError") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }
  
    if (err.name === "UnauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }
  
    if (err.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send({
        message: err.message,
      });
    }
    
    console.log("erro escrito")
    console.error("console.erro", err.name);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error: "InternalServerError",
      message: "Internal Server Error",
    });
  }
  
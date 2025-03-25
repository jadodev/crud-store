export class ExceptionHandler extends Error {
    public code: string;
  
    constructor(message: string, code: string) {
      super(message);
      this.code = code;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export class BranchExceptionHandler {
    static notFound(message = "Tienda no encontrada") {
      return new ExceptionHandler(message, "BRANCH_NOT_FOUND");
    }
  
    static validationError(message = "Datos de la tienda inválidos") {
      return new ExceptionHandler(message, "BRANCH_VALIDATION_ERROR");
    }
  
    static creationError(message = "Error al crear la tienda") {
      return new ExceptionHandler(message, "BRANCH_CREATION_ERROR");
    }
  
    static updateError(message = "Error al actualizar la tienda") {
      return new ExceptionHandler(message, "BRANCH_UPDATE_ERROR");
    }
  
    static deletionError(message = "Error al eliminar la tienda") {
      return new ExceptionHandler(message, "BRANCH_DELETION_ERROR");
    }

    static unknowError (message = "Error desconcido"){
        return new ExceptionHandler(message, "UNKOWN_ERROR");
    }
  }
  
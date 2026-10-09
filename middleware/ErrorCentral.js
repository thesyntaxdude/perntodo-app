const ErrorCentral = (error, req, res, next) => {
  console.error(error.stack);
  if (req.headersSent) {
    return next(error);
  }
  const message = error.isOperational ? error.message : "Something went wrong";
  const statusCode = error.isOperational ? error.statusCode : 500;
  res.status(statusCode).json({ message });
};

export default ErrorCentral;

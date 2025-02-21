const errorHandler = (err, req, res, next) => {
   // Check if set a status in the error
   if (err.status) {
      res.status(err.status).json( {message: err.message });
   } else {
      // default
      res.status(500).json( {message: err.message });
   }
}

export default errorHandler;
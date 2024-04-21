const errorHandlingMiddleware = (err, req, res, next) => {
    // Logging the request received for debugging purpose
  console.log(`Request received: ${req.method} ${req.url}`);
  
   if (!res.headersSent) {
      return next();
    }
   
   if (err.message === 'Not found') {
        // Handle the route not found error here
       res.status(404).json({ message: err.message });
    } else {
        // Handle other types of errors here
       res.status(500).json({ message: 'Internal Server Error' });
    }
};
 
module.exports = errorHandlingMiddleware;

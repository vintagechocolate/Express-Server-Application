function authenticationMiddleware(req, res, next) {
    // Authentication logic here (e.g., check if user is logged in)
    console.log("Authentication middleware");
    next();
  }
  
module.exports = authenticationMiddleware;
  
const auth = require('basic-auth');


function authenticationMiddleware(req, res, next) {
    // Parse user from Authorization header 
    let user = auth(req);
    
    if (!user || !user.name || !user.pass) {
        // If user is not found or credentials are missing, send a 401 status
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send();
    }
  
     // Here you would normally validate the username and password against your database:
     
    if (user.name === 'admin' && user.pass === 'secret') { 
         // If credentials are valid, continue to next middleware
        return next();
    } else {
        // If credentials are invalid, send a 401 status
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send();
    }
}
  
module.exports = authenticationMiddleware;

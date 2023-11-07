
var jwt = require('jsonwebtoken');
const secretKey = "deep404";

const fetchregis = (req, res, next) => {
    let success=false;
    // Get the user from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        res.status(401).send({success, error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, secretKey);
        console.log(data);
        req.regis1 = data.regis;
        if(data){
            next();
        }
    } catch (error) {
        res.status(401).send({success, error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchregis;
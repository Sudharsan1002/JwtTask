const jwt = require('jsonwebtoken')

// Middleware to verify token
function validatetoken(req, res, next) {
    try {
        // Check if the token is provided in the 'token' header
        const token = req.header("token")

        if (!token) {
            return res.status(401).send({
                message: "Access denied. No token provided."
            })
        }

        // Verify token using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        // Attach the decoded user information to the req object
        req.user = decoded

        // Token is valid, proceed to the next middleware or route handler
        next()

    } catch (error) {
        res.status(400).send({
            message: "Invalid token or token expired",
            error: error.message
        })
    }
}

module.exports = validatetoken

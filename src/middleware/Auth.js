import jwt from "jsonwebtoken";

export function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401)
        .send("Access denied!");
    try {
        const jwtSecret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid auth token");
    }
};




import jwt from "jsonwebtoken";

export const GenAuthToken = (user) => {
    const jwtSecretKey = process.env.JWT_SECRET;
    const token = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email
    }, jwtSecretKey);
    return token;
};




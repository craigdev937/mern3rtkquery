import bcrypt from "bcrypt";
import { GenAuthToken } from "../middleware/GenToken.js";
import { UserModel } from "../models/User.js";
import { regVal, loginVal } from "../validation/Validate.js";

class UserClass {
    Register = async (req, res, next) => {
        try {
            const { error } = regVal.validate(req.body);
            if (error) return res.status(400)
                .send(error.details[0].message);
            let user = await UserModel.findOne({ email: req.body.email });
            if (user) return res.status(400)
                .send("That User already exists.");                
            const { name, email, password } = req.body;
            user = new UserModel({ name, email, password });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await user.save();
            const token = GenAuthToken(user);
            res.send(token)
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Login = async (req, res, next) => {
        try {
            const { error } = loginVal.validate(req.body);
            if (error) return res.status(400)
                .send(error.details[0].message);
            let user = await UserModel.findOne({ email: req.body.email });
            if (!user) return res.status(400)
                .send("Invalid email or password.");
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            if (!validPassword) return res.status(400)
                .send("Invalid email or password");
            const token = GenAuthToken(user);
            res.send(token);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const USER = new UserClass();






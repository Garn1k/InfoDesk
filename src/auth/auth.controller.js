import { ref } from 'joi';
import AuthServise from './auth.service';


export default class AuthController{
    static async login(req, res, next){
        try {
            const {user, pwd} = req.body;
            const tokens = await AuthServise.login(user, pwd); // Anhaskanali e
            return res.json(tokens);
        } catch (error) {
            next(error);
        }
    }
    // anhaskanali e
    // static async refresh(req, res, next){
    //     try {
    //         const {refreshToken} = req.body;
    //         const tokens = await AuthServise.refresh(refreshToken);
    //         return res.json(tokens);
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}
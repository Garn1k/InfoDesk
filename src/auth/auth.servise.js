import jwt from 'jsonwebtoken';
import config from '../config/variables.config'
import { UsersModel } from '../models'

const {AUTH} = config
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = AUTH

export default class AuthServise {
    static generateTokens(payload) {
        const accessToken = jwt.sign(payload,JWT_ACCESS_SECRET)
        const refreshToken = jwt.sign(payload,JWT_REFRESH_SECRET)
        return {accessToken, refreshToken};
    }
    static validateAccessToken(accessToken) {

    }
    static async refresh(token) {

    }
    static async login(user, pwd) {
        try {
            const userAdmin = await UsersModel.findByUsername(user);
            if(!userAdmin){
                throw new Error("Invalid username or password");
            }

///////////ete usernmame jisht e stugel pwd
///////////JWT tokenneri generation

            delete userAdmin.pwd; 

            const payload = {
                id: userAdmin.id,
                user: userAdmin.user,
                role: userAdmin.role
            }
            const {accessToken, refreshToken} = AuthServise.generateTokens(payload);
            return payload;

        } catch (error) {
            console.log(error);

        }
    }

    
}
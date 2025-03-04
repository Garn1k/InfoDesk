import jwt from "jsonwebtoken";
import config from "../config/variables.config";
import { UsersModel } from "../models";
import bCrypt from "bcryptjs";

const { AUTH } = config;
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = AUTH;

export default class AuthServise {
  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET);
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET);
    return {accessToken, refreshToken};
  }
  static validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, JWT_ACCESS_SECRET);
    } catch (error) {
      throw new Error("unouthorized");
    }
  }
  // static async refresh(token) {
  //   try {
  //       const user = AuthServise.validateRefreshToken(token);
  //       const {accessToken, refreshToken} = AuthServise.generateTokens(payload);
  //   } catch (error) {
  //     throw new Error("er");
  //   }
  // }
  static validateRefreshToken(refreshToken) {
    try {
      return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    } catch (error) {
      throw new Error("invalid refresh token");
    }
  }

  static async login(user, pwd) {
    try {
      const userAdmin = await UsersModel.findByUsername(user);
      if (!userAdmin) {
        throw new Error("Invalid username or password");
      }
      if(!bCrypt.compareSync(pwd, userAdmin.pwd)){
        throw new Error("Invalid username or password");
      }

      ///////////JWT tokenneri generation

      delete userAdmin.pwd;
      const {accessToken, refreshToken} = AuthServise.generateTokens({...userAdmin});

      const payload = {
        id: userAdmin.id,
        user: userAdmin.user,
        role: userAdmin.role,
        accessToken,
        refreshToken
      };
      return payload;
    } catch (error) {
      console.log(error);
    }
  }
}

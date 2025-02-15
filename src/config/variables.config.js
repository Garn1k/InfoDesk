// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

const config = {
    ADMIN_PASSWORD : "prime!@#$",
    CORS : process.env.CORS,
    PORT : process.env.PORT,
    PSQL : {
        PORT : process.env.PSQL_PORT,
        HOST : process.env.PSQL_HOST,
        USER : process.env.PSQL_USER,
        DATABASE : process.env.PSQL_DATABASE,
        PASSWORD : process.env.PSQL_PASSWORD
    },
    AUTH: {
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        ACCESS_TOKEN_ACTIVE_TIME: process.env.ACCESS_TOKEN_ACTIVE_TIME,
        REFRESH_TOKEN_ACTIVE_TIME: process.env.REFRESH_TOKEN_ACTIVE_TIME
      }
}

export default config;
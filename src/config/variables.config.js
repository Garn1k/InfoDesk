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
    }
}

export default config;
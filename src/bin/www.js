// Standart modules --------------------------------------------------------------
import http from "http"; // Http
import "dotenv/config"; // Dotenv

// Local modules -----------------------------------------------------------------
import config from "../config/variables.config"; // Variables
import {name} from "../../package.json"; // Package
import App from "../app"; // App
const {PORT} = config; // Port

const init = async () => {
    const server = http.createServer(App.app);
    App.init(server);
}
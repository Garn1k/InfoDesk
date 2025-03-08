// NPM modules -------------------------------------------------------------------
import bodyParser from "body-parser"; // Json parser
import cors from "cors"; // Cross-origin resourse sharing
import express from "express"; // Express
import morgan from "morgan"; // Logger
// import helmet from "helmet"; // Security

// Local modules -----------------------------------------------------------------
import config from "./config/variables.config"; // Variables
import PSQLStorage from "./storage/psql.storage"; // Postgres storage
import ErrorHandlerMiddleware from "./middlewares/error-handler.middleware"; // Error handler
import Api from "./api/index"; // API


class App {
    constructor() {
        this.app = express();
        this.app.use("/react",express.static("react"));

    }
    async init(){
        await App._initializeStorage();
        this._setRequestLogger();
        this._setCors();
        this._setRequestParser();
        this._initializeApi();
        // this._setErrorHandler();
    }
    _setRequestLogger(){
        this.app.use(morgan("dev"));
    }
    _setCors(){
        this.app.use(cors({
            origin : process.env.CORS,
            methods : ["GET","POST","PUT","DELETE","PATCH"],
            allowedHeaders : ["Content-Type","Authorization"]
        }));
    }
    _setRequestParser(){
        this.app.use(bodyParser.json());
        this.app.use(express.json());
    }
    _initializeApi(){
        this.app.use("/api/v1",Api);
    }
    static _initializeStorage(){
        return PSQLStorage.init();
    }
    // _setErrorHandler(){
    //     this.app.use(ErrorHandlerMiddleware.init);
    // }
}

export default new App();
// import knex from 'knex';
import config from './src/config/variables.config';

const {PSQL} = config;
const {PORT, HOST, USER, DATABASE, PASSWORD} = PSQL;

export default {
    development : {
        client : 'pg',
        port : PORT,
        host : HOST,
        user : USER,
        database : DATABASE,
        password : PASSWORD,
        useNullasdefault : true,
        seeds : {
            directory : "seeds/seed.js"
        }
    },
    // production : {
    //     client : 'pg',
    //     port : PORT,
    //     host : HOST,
    //     user : USER,
    //     database : DATABASE,
    //     password : PASSWORD,
    //     useNullasdefault : true,
    //     seeds : {
    //         directory : "seeds/seed.js"
    //     }
    // }
}
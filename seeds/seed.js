import knex from 'knex';
import knexConfig from '../knex.config';
import config from '../src/config/variables.config';
import bCrypt from 'bcryptjs';


const {ADMIN_PASSWORD} = config;

async function seed (pg){
    await pg('mps').insert([
        {
            name : 'Prime',
            lastname : 'Minister',
            fullname : 'Prime Minister',
            role : 'admin'
        }
    ])
}

async function init (){
    try {
        const pg = knex(knexConfig.development);
        await seed(pg);
        console.log('Successfully seeded');
    } catch (error) {
        console.error(error);
    }
}

init();
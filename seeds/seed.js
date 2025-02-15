import knex from 'knex';
import knexConfig from '../knex.config';
import config from '../src/config/variables.config';
import bCrypt from 'bcryptjs';


const {ADMIN_PASSWORD} = config;

async function seed (pg){
    await pg('mps').insert([
        {
            firstname : 'Ալեն',
            lastname : 'Սիմոնյան',
            surname : 'Ռոբերտի',
            phonenumber : '14-88',
            key : true,
            created_at : new Date().toISOString(),
            updated_at : new Date().toISOString()
        },
        {
            firstname : 'Հակոբ',
            lastname : 'Արշակյան',
            surname : '',
            phonenumber : '14-26',
            key : true,
            created_at : new Date().toISOString(),
            updated_at : new Date().toISOString()
        },
        {
            firstname : 'Ռուբեն',
            lastname : 'Ռուբինյան',
            surname : '',
            phonenumber : '13-55',
            key : true,
            created_at : new Date().toISOString(),
            updated_at : new Date().toISOString()
        }

    ]);
    await pg('users').insert([
        { 
            user : 'Simonyan',
            pwd : bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
            role : 'admin',
            created_at : new Date().toISOString(),
            updated_at : new Date().toISOString()
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
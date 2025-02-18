import knex from 'knex';
// import config from './src/config/variables.config';
import knexConfig from '../knex.config';

function up(pg){
    return pg.schema
    .createTable('mps', (table) => {
        table.increments('id').primary();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('surname');
        table.string('phonenumber').notNullable();
        table.boolean('key');
        table.dateTime('created_at');
        table.dateTime('updated_at');
    })
    .createTable('users', (table) => {
        table.increments('id').primary();
        table.string('user').notNullable().unique();
        table.string('pwd').notNullable();
        table.string('role').notNullable();
        table.dateTime('created_at');
        table.dateTime('updated_at');
        
    })
}

async function init (){
    try {
        const pg = knex(knexConfig.development);
        await up(pg);
    } catch (error) {
        console.error(error);
    }
}

init();
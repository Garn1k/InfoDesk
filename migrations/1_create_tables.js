import knex from 'knex';
// import config from './src/config/variables.config';
import knexConfig from '../knex.config';

function up(pg){
    return pg.schema
    .createTable('mps', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('lastname').notNullable();
        table.string('fullname').notNullable();
        table.string('role').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(pg.fn.now());
        table.dateTime('updated_at').notNullable().defaultTo(pg.fn.now());
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
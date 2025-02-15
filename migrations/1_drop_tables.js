import knex from 'knex';
import knexConfig from '../knex.config';

function down (pg) {
    return pg.schema
    .dropTableIfExists('mps')
    .dropTableIfExists('users')
}

async function init (){
    try {
        const pg = knex(knexConfig.development);
        await down(pg);
    } catch (error) {
        console.error(error);
    }
}

init();
import knex from 'knex';
import knexConfig from '../knex.config';

function down (pg) {
    return pg.schema
    .dropTableIfExists('mps')
    .dropTableIfExists('committee')
    .dropTableIfExists('faction')
    .dropTableIfExists('units')
    .dropTableIfExists('acceptability')
    .dropTableIfExists('second-acceptability')
    .dropTableIfExists('text1')
    .dropTableIfExists('text2')
    .dropTableIfExists('users')
    .dropTableIfExists('time_table')
}

async function init (){
    try {
        const pg = knex(knexConfig.development);
        await down(pg);
        console.log('Successfully dropped all tables ...');
        process.kill(process.pid);
        
    } catch (error) {
        console.error(error);
    }
}

init();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://addwrmhz:Qu6WFe2W25ngBbhi8FqDbhUMgQDt91x4@tyke.db.elephantsql.com/addwrmhz';

});

module.exports = pool;


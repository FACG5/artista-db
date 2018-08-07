const pg = require ('pg');
require ('env2')('./config.env');
const url = require('url');


if (!process.env.DB_URL) throw new Error ('DB_URL MISSING');

const params = url .parse(process.env.DB_URL);
const [username, password]=params.auth.split(':');



const options = {
    password,
    user: username,
    port: params.port,
    host: params.hostname,
    database: params.pathname.split('/')[1],
    max:process.env.DB_MAX_CONNICTIONS || 2,
    ssl: true
}

module.exports = new Pool (options);

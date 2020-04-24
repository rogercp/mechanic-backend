const knex = require('knex');
const config = require('../knexfile');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const environment = process.env.NODE_ENV || 'development';

module.exports = knex(config[environment]);

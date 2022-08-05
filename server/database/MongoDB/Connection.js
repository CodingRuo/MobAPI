"use strict";
const _dirname  = process.cwd()
const config    = require( _dirname + "/config.json");

module.exports = class Connection { 
        
        constructor(  ) {
            
        }

        async init() {
            const { MongoClient }   = require('mongodb');
            const url               = `mongodb://${config.database.host}:${config.database.port}`;
            const client            = new MongoClient(url);

            // Database Name
            const dbName            = config.database.name || 'defaultDb';

            await client.connect();
            const db                = client.db(dbName);
            
            return db
        }
        
}
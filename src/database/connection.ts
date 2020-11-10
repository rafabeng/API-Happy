import {ConnectionOptions} from 'typeorm';

const config: ConnectionOptions = {
    type: 'postgres', 
  host: process.env.TYPEORM_HOST, 
  port: Number(process.env.TYPEORM_PORT), 
  username: process.env.TYPEORM_USERNAME, 
  password: process.env.TYPEORM_PASSWORD, 
  database: process.env.TYPEORM_DATABASE,
  entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
  ], 
  cli: {
         migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
       },    
  };
   
  export = config;

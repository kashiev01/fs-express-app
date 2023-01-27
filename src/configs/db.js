import * as dotenv from "dotenv";
dotenv.config();

const postgres = {
	host: process.env.POSTGRES_HOST,
	port: +process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
};

export default postgres;
//run a seed file: docker exec -it postgres-EHDZ psql -U postgres -d postgres -f /seed.query.sql

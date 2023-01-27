import postgres from "../configs/db.js";
import readFile from "../../storage/modules/fs-read.module.js";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool(postgres);

const download = async fileName => {
	const data = await pool.query(
		`SELECT * FROM data WHERE name = '${fileName}' LIMIT 1`
	);

	const row = data.rows[0];

	if (row === undefined) {
		return "This file does not exists. Please re-check file name";
	} else {
		const readResult = readFile(fileName, row.mimetype);
		return [readResult, row.mimetype];
	}
};

export default download;

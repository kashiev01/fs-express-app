import writeFile from "../../storage/modules/fs-write.module.js";
import postgres from "../configs/db.js";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool(postgres);

const upload = async (size, mimetype, fileName) => {
	const writeResult = writeFile(fileName, mimetype);

	if (writeResult) {
		const data = await pool.query(
			`SELECT * FROM data WHERE name = '${fileName}' LIMIT 1`
		);
		if (data.rows.length == 0) {
			await pool.query(
				"INSERT INTO data (name, mimetype, size) VALUES ($1, $2, $3)",
				[fileName, mimetype, size]
			);
			return writeResult;
		} else {
			await pool.query(
				"UPDATE data SET mimetype = $1, size = $2 WHERE name = $3;",
				[mimetype, size, fileName]
			);
			return `Existing file ${fileName} was updated`;
		}
	} else {
		return "Looks like you have not attached a file or format is not supported";
	}
};

export default upload;

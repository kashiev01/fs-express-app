import fs from "fs";
import formatDict from "../utils/format-dict.js";
import config from "../../src/configs/app-configs.js";

const readFile = (fileName, mimetype) => {
	const fileFormat = formatDict[mimetype];
	const filePath = config.files.dir + fileName + fileFormat;
	const reader = fs.createReadStream(filePath);
	return reader;
};

export default readFile;

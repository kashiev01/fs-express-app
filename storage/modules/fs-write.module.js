import fs from "fs";
import formatDict from "../utils/format-dict.js";
import config from "../../src/configs/app-configs.js";

const writeFile = (fileName, mimetype) => {
	const fileFormat = formatDict[mimetype];
	if (formatDict.hasOwnProperty(mimetype)) {
		const writer = fs.createWriteStream(
			config.files.dir + fileName + fileFormat
		);
		return writer;
	} else {
		return false;
	}
};

export default writeFile;

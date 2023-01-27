import download from "../services/download-service.js";

const getFile = async (req, res, next) => {
	const fileName = req.params.filename;
	const result = await download(fileName);
	const mimetype = result[1];

	if (typeof result !== "string") {
		res.attachment(fileName);
		res.setHeader("content-type", mimetype);
		result[0].pipe(res);
	} else {
		res.send(result);
	}
};

export default getFile;

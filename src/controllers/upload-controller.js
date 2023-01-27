import upload from "../services/upload-service.js";

const putUpload = async (req, res, next) => {
	const size = req.headers["content-length"];
	const mimetype = req.headers["content-type"];
	const fileName = req.params.filename;
	const result = await upload(size, mimetype, fileName);

	if (typeof result !== "string") {
		await req.pipe(result);
		res.send(`File ${fileName} was uploaded succesfully`);
	} else {
		res.send(result);
	}
};

export default putUpload;

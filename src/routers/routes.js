import Router from "express";

import upload from "../controllers/upload-controller.js";
import download from "../controllers/download-controller.js";

const router = Router({ mergeParams: true });

router.put("/upload/:filename/", upload);

router.get("/:filename", download);

export default router;

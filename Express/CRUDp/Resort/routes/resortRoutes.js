const express = require("express");
const router = express.Router();
const controller = require("./../controllers/resortController");

router.route("/").get(controller.getResorts).post(controller.postResorts);

router.param("id", controller.checkId);

router
  .route("/:id")
  .get(controller.getResortsById)
  .patch(controller.patchResortById)
  .delete(controller.deleteResortById);

module.exports = router;

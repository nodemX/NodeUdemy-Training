const express = require("express");
const router = express.Router();
const controller = require("./../controllers/userController");

router.route("/").get(controller.getUsers).post(controller.postUsers);

router
  .route("/:id")
  .get(controller.getUsersById)
  .patch(controller.patchUsersById)
  .delete(controller.deleteUsersById);

module.exports = router;

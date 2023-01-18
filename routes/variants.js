const express = require("express");
const router = express.Router();
const { addCustomization } = require("../controllers/variantController");

router.route("/create/variants").post(addCustomization);

module.exports = router;

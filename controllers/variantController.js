const Variant = require("../models/variants");
const BigPromise = require('../middlewares/bigPromise');

exports.addCustomization = BigPromise(async (req, res, next) => {
  console.log(req.body);
  const variant = await Variant.create(req.body);

  res.status(200).json({
    success: true,
    variant,
  });
});

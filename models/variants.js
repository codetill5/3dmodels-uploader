const mongoose = require("mongoose");
const materials = require("./materials");

const variantSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  canvasBackground: {
    type: String,
    required: true,
  },
  shadowIntensity: {
    type: Number,
    default: 0,
  },
  shadowSoftness: {
    type: Number,
    default: 1,
  },
  exposure: {
    type: Number,
    default: 1,
  },
  environment: {
    type: String,
  },
  // allVariants: [
  //   {
  //     backgroundColor: {
  //       type: String,
  //     },
  //     metalness: [materials],
  //     roughness: [materials],
  //     baseColors: [materials],
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Variants", variantSchema);

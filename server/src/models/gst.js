const mongoose = require("mongoose");

const gstSchema = new mongoose.Schema(
  {
    gstDesc: {
      type: String,
      required: true,
    },
    gstRate: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Gst = mongoose.model("Gst", gstSchema);

module.exports = Gst;

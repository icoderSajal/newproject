const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    rolename: {
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

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;

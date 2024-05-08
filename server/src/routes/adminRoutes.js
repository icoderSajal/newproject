const express = require("express");
const {
  createRole,
  getallRole,
  deleteRole,
  getroleById,
  updateRole,
  createGst,
  getallGst,
  deleteGst,
  getgstById,
  updateGst,
} = require("../controllers/adminController");
const router = express.Router();

// roles route
router.post("/createRole", createRole);
router.get("/getallRole", getallRole);
router.delete("/deleteRole/:id", deleteRole);
router.get("/getroleById/:id", getroleById);
router.put("/updateRole/:id", updateRole);

// gst route
router.post("/createGst", createGst);
router.get("/getallGst", getallGst);
router.delete("/deleteGst/:id", deleteGst);
router.get("/getgstById/:id", getgstById);
router.put("/updateGst/:id", updateGst);

module.exports = router;

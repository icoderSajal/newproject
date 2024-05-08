const Role = require("../models/roles");
const Gst = require("../models/gst");
const createRole = async (req, res) => {
  let role = new Role();
  role.rolename = req.body.rolename;
  role.active = req.body.active;
  const doc = await role.save();
  console.log(doc);
  res.json(doc);
};

const getroleById = async (req, resp) => {
  let result = await Role.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found." });
  }
};

const updateRole = async (req, resp) => {
  let result = await Role.updateOne({ _id: req.params.id }, { $set: req.body });
  resp.send(result);
};

const deleteRole = async (req, res) => {
  let result = await Role.deleteOne({ _id: req.params.id });
  res.send(result);
};

const getallRole = async (req, res) => {
  const docs = await Role.find({});
  res.json(docs);
};

/////////////////////////////////////////

const createGst = async (req, res) => {
  let gst = new Gst();
  gst.gstDesc = req.body.gstDesc;
  gst.gstRate = req.body.gstRate;
  gst.active = req.body.active;
  const doc = await gst.save();
  console.log(doc);
  res.json(doc);
};

const getallGst = async (req, res) => {
  const docs = await Gst.find({});
  res.json(docs);
};

const deleteGst = async (req, res) => {
  let result = await Gst.deleteOne({ _id: req.params.id });
  res.send(result);
};

const getgstById = async (req, resp) => {
  let result = await Gst.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found." });
  }
};

const updateGst = async (req, resp) => {
  let result = await Gst.updateOne({ _id: req.params.id }, { $set: req.body });
  resp.send(result);
};

//////////////////////////
module.exports = {
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
};

// const createRole = async (req, res) => {
//   try {
//     const newRole = new Role(req.body);
//     await newRole.save();
//     res
//       .status(201)
//       .send({ message: "Roles Created Sucessfully", success: true });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: `Roles Controller ${error.message}`,
//     });
//   }
// };

// const getallRole = async (req, res) => {
//   try {
//     const roles = await Role.find({});
//     res.status(200).send({
//       success: true,
//       message: "Roles Lists Fetched Successfully",
//       data: roles,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Errro while Fetching Roles",
//     });
//   }
// };

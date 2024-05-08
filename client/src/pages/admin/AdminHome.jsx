import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import role from "../../../public/img/roles.png";
import gst from "../../../public/img/gst.png";
import pass from "../../../public/img/password.png";
import accessmng from "../../../public/img/depart.png";

const AdminHome = () => {
  return (
    <div
      className="mx-auto container bg-slate-400 
     rounded-xl grid grid-flow-col"
    >
      <NavLink to="/admin/home/roles">
        <Card title="Roles Master" imgSrc={role} />
      </NavLink>
      <NavLink to="/admin/home/gstMaster/gst">
        <Card title="GST Master" imgSrc={gst} />
      </NavLink>
      <NavLink to="/admin/home/accessmanagement/access">
        <Card title="Access Management" imgSrc={accessmng} />
      </NavLink>
      <NavLink to="/admin/home/passwodrest">
        <Card title="Reset Password" imgSrc={pass} />
      </NavLink>
    </div>
  );
};

export default AdminHome;

import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import admin from "../../public/img/admin.png";

const Home = () => {
  return (
    <>
      <div className="mx-auto container shadow-xl">
        <NavLink to="/admin/home">
          <Card
            title="Admin"
            imgSrc={admin}
            desc="The Admin created ,update and Delete The Roles"
          />
        </NavLink>
      </div>
    </>
  );
};

export default Home;

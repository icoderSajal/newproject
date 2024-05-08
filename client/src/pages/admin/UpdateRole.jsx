import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
const UpdateRole = () => {
  const [rolename, setRolename] = React.useState("");
  const [active, setActive] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getRoleDetails = async () => {
    console.warn(params);
    let result = await fetch(
      `http://localhost:8080/api/v1/admin/getroleById/${params.id}`
    );
    result = await result.json();
    setRolename(result.rolename);
    setActive(result.active);
  };
  useEffect(() => {
    getRoleDetails();
  }, []);

  const updateRole = async () => {
    //console.warn(name, price, category, company);
    let result = await fetch(
      `http://localhost:8080/api/v1/admin/updateRole/${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ rolename, active }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/admin/home/roles");
    }
  };

  const handleBack = () => {
    navigate("/admin/home/roles");
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-white text-center text-2xl p-6 underline">
          <h3>UpDate Roles</h3>
        </div>
        <div className="p-4 grid  grid-cols-3">
          <div>
            <div>
              <input
                type="text"
                className="h-10 rounded-lg w-[200px] p-4"
                placeholder="Enter The Roles"
                name="rolename"
                value={rolename}
                onChange={(e) => {
                  setRolename(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <select
                type="text"
                className="h-10 rounded-lg w-[200px]"
                placeholder="Status"
                name="active"
                value={active}
                onChange={(e) => {
                  setActive(e.target.value);
                }}
              >
                <option>-Select-</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className="bg-slate-800 text-white p-2 rounded-xl"
              onClick={updateRole}
            >
              Update
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              className="bg-slate-800 text-white p-2 rounded-xl"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRole;

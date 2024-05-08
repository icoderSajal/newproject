import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

const Roles = () => {
  const [inputBox, setInputBox] = useState({});
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const handleinputChnage = (e) => {
    setInputBox({
      ...inputBox,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(inputBox);
    // alert(`the Value of input box is ${inputBox}`);

    const response = await fetch(
      "http://localhost:8080/api/v1/admin/createRole",
      {
        method: "POST",
        body: JSON.stringify(inputBox),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    alert("Roles Created Successfully");
    if (data) {
      getData();
    }
  };

  const getData = async (e) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/getallRole",

      {
        method: "GET",
      }
    );

    const data = await response.json();
    console.log(data);
    setRoles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteRole = async (id) => {
    console.warn(id);

    let result = await fetch(
      `http://localhost:8080/api/v1/admin/deleteRole/${id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();

    if (result) {
      getData();
    }
  };

  const handleBack = () => {
    navigate("/admin/home");
  };
  return (
    <>
      {/* <p>{JSON.stringify(inputBox)}</p> */}

      <div className="container mx-auto ">
        <div className="text-white text-center text-2xl p-6 underline">
          <h3>Roles Master</h3>
        </div>
        <div className="p-4 grid  grid-cols-4">
          <div>
            <div>
              <label htmlFor="gst" className="text-white text-xl p-3">
                Role Description
              </label>
              <input
                type="text"
                className="h-10 rounded-lg w-[200px] p-4"
                placeholder="Enter The Roles"
                name="rolename"
                value={inputBox.rolename}
                onChange={handleinputChnage}
              />
            </div>
          </div>
          <div>
            <div>
              <label className="text-white text-xl">Active</label>
              <select
                type="text"
                className="h-10 rounded-lg w-[200px]"
                placeholder="Status"
                name="active"
                value={inputBox.active}
                onChange={handleinputChnage}
              >
                <option>-Select-</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div>
            <div className=" p-6">
              <button
                className="bg-slate-900 text-white p-2 rounded-xl"
                onClick={handleSave}
              >
                Save
              </button>
              &nbsp;&nbsp;&nbsp; &nbsp;
              <button
                className="bg-slate-900 text-white p-2 rounded-xl"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <hr></hr>
        {/* <div>{JSON.stringify(roles)}</div> */}
        <div className="conatiner mx-auto my-2 shadow-2xl">
          <table className=" container bg-slate-300 rounded-2xl text-black">
            <thead className="text-xl">
              <tr>
                <th>S.No</th>
                <th>Role Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.length > 0 ? (
                roles.map((data, index) => (
                  <tr key={data._id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{data.rolename}</td>
                    <td className="text-center">{data.active}</td>
                    <td className="text-center">
                      <Link to={"/admin/home/roles/" + data._id}>
                        <button className="p-1 rounded-lg bg-green-400 text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 p-1 rounded-lg text-white"
                        onClick={() => deleteRole(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                    {/* <td>
                      <Link to={"/update/" + item._id}>Update </Link>
                    </td> */}
                  </tr>
                ))
              ) : (
                <h1>No Result Found</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Roles;

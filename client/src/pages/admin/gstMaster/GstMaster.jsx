import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { json } from "react-router-dom";
const GstMaster = () => {
  const [gstDesc, setGstDesc] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [active, setActive] = useState("");
  const [gsts, setGsts] = useState([]);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/admin/home");
  };

  const getGst = async (e) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/admin/getallGst",

      {
        method: "GET",
      }
    );

    const data = await response.json();
    console.log(data);
    setGsts(data);
  };

  useEffect(() => {
    getGst();
  }, []);

  const deleteGST = async (id) => {
    let result = await fetch(
      `http://localhost:8080/api/v1/admin/deleteGst/${id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();

    if (result) {
      getGst();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/v1/admin/createGst",
      {
        method: "POST",
        body: JSON.stringify({ gstDesc, gstRate, active }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    alert("GST Created Successfully");
    if (data) {
      getGst();
    }
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-white text-center text-2xl p-6 underline">
          <h3>GST Master</h3>
        </div>
        <div className="p-4 grid  grid-cols-4">
          <div>
            <div>
              <label htmlFor="gst" className="text-white text-2xl p-3">
                GST Description
              </label>
              <input
                type="text"
                className="h-10 rounded-lg w-[200px] p-6"
                placeholder="GST Description"
                name="gstDesc"
                value={gstDesc}
                onChange={(e) => setGstDesc(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="gst rate" className="text-white text-2xl p-3">
                GST Rate
              </label>
              <input
                type="text"
                className="h-10 rounded-lg w-[200px] p-6"
                placeholder="GST Rate"
                name="gstRate"
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="gst-active" className="text-white text-2xl p-3">
                Active
              </label>
              <select
                type="text"
                className="h-10 rounded-lg w-[200px]"
                placeholder="Status"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <option>-Select-</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mt-8">
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
                <th>Gst Description</th>
                <th>Gst Rate</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gsts.length > 0 ? (
                gsts.map((data, index) => (
                  <tr key={data._id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{data.gstDesc}</td>
                    <td className="text-center">{data.gstRate}</td>
                    <td className="text-center">{data.active}</td>
                    <td className="text-center">
                      <Link to={"/admin/home/gstMaster/gst/" + data._id}>
                        <button className="p-1 rounded-lg bg-green-400 text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 p-1 rounded-lg text-white"
                        onClick={() => deleteGST(data._id)}
                      >
                        Delete
                      </button>
                    </td>
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

export default GstMaster;

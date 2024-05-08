import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

const UpdateGst = () => {
  const [gstDesc, setGstDesc] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [active, setActive] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getGstDetails = async () => {
    console.warn(params);
    let result = await fetch(
      `http://localhost:8080/api/v1/admin/getgstById/${params.id}`
    );
    result = await result.json();
    setGstDesc(result.gstDesc);
    setGstRate(result.gstRate);
    setActive(result.active);
  };
  useEffect(() => {
    getGstDetails();
  }, []);

  const handleBack = () => {
    navigate("/admin/home/gstMaster/gst");
  };

  const handleUpdate = async () => {
    //console.warn(name, price, category, company);
    let result = await fetch(
      `http://localhost:8080/api/v1/admin/updateGst/${params.id}`,
      {
        method: "Put",
        body: JSON.stringify({ gstDesc, gstRate, active }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    result = await result.json();
    if (result) {
      navigate("/admin/home/gstMaster/gst");
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
                className="h-10 rounded-lg w-[200px] p-4"
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
                className="h-10 rounded-lg w-[200px] p-4"
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
                onClick={handleUpdate}
              >
                Update
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
      </div>
    </>
  );
};

export default UpdateGst;

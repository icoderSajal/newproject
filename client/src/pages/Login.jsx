import React, { useState } from "react";

const Login = () => {
  const [inputBox, setInputBox] = useState({});

  const handleInput = (e) => {
    //console.log(e.target.value, e.target.name);
    setInputBox({
      ...inputBox,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(inputBox);
    alert(`the Value of input box is ${inputBox}`);
  };
  return (
    <>
      <div className="container bg-slate-700 text-white rounded-lg text-center mx-auto md:w-[400px]">
        <div className="text-3xl my-8 p-4">
          <h3>Login</h3>
        </div>
        <form>
          {/* <p>{JSON.stringify(inputBox)}</p> to check the data  */}
          <div className="my-5 text-xl p-4">
            <div>
              <lable>User name/Email</lable>
            </div>
            <div>
              <input
                type="text"
                name="username"
                onChange={handleInput}
                value={inputBox.username}
                className="rounded-xl w-[300px] h-[50px] text-black"
                placeholder="Please Enter your username / Email"
              />
            </div>
            <div>
              <lable>Password</lable>
            </div>
            <div>
              <input
                type="text"
                name="password"
                onChange={handleInput}
                value={inputBox.password}
                className="rounded-xl w-[300px] h-[50px] text-black"
                placeholder="Please Enter your password"
              />
            </div>
            <div className="p-6">
              <button
                className=" bg-slate-900 text-white p-2 rounded-xl"
                type="submit"
                onClick={handleSave}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

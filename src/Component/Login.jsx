import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/admin.jpg";
import login from "../assets/login.jpg";
import axios from "axios";
import { Context } from "../context/ContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id, setId } = useContext(Context);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios
        .post(`http://localhost:4001/userRoutes/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/home");
          setId(res.data.msg);
          localStorage.setItem("id", res.data.msg);
        })

        .catch((err) => {
          console.log(err);
        });
    } catch {
      console.log("invalid");
    }
  };
  return (
    <div className="w-full h-screen ">
      <div className="flex justify-between">
        <div className="w-[30%]">
          <div className="justify-center flex mt-[120px]">
            <img className="w-[100px]" src={logo} alt="" />
          </div>
          <div className="w-full">
            <div className="justify-center flex">
              <h1 className="text-[#CA0000] text-[30px] font-bold">
                St.Clare Collage Of Caloocan
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="text-center mt-[50px]">
              <h1 className=" text-[30px] font-bold">Sign In</h1>
            </div>
          </div>

          <div className="w-full  ">
            <div className="mt-4 flex items-center justify-center">
              <input
                placeholder="Email"
                class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[400px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full ">
            <div className="mt-4 flex items-center justify-center">
              <input
                placeholder="Password"
                class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[400px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mt-[50px] flex justify-center">
            <button className="bg-[#ca0000] text-white px-[15px] py-3 rounded-lg transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white">
              <Link to="/home">
                {" "}
                <p className="font-bold text-[20px]">Enter</p>
              </Link>
            </button>
          </div>

          <div className="w-full">
            <div className="items-center justify-center flex mt-[300px]">
              <Link to="/forget">
                {" "}
                <p className="font-black tracking-widest text-[20px] cursor-pointer text-[gray] hover:text-black">
                  Can't Sign In?
                </p>
              </Link>
            </div>

            <div className="items-center justify-center flex mt-[10px]">
              <Link to="/register">
                <p className="font-black tracking-widest text-[20px] cursor-pointer text-[gray] hover:text-black">
                  Create Account
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[70%] ">
          <div className="">
            <img className="w-full h-screen" src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

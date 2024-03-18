import React from "react";
import forget from "../assets/home3.jpg";
import forget1 from "../assets/admin.jpg";
import forget2 from "../assets/login.jpg";
import { FcDeleteDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex justify-between">
          <div className="w-[3  0%] ml-[100px] mt-[30px]">
            <div className="">
              <img className="w-[150px]" src={forget1} alt="" />
            </div>
            <div className="">
              <div className="mt-[20px]">
                <h1 className="font-bold text-[40px]">Be Responsible</h1>
                <h1 className="font-semibold text-[#808080] text-[25px]">
                  Be a Clareans
                </h1>
              </div>
              <div className="w-full">
                <div className="mt-[180px]">
                  <h1 className="text-black font-bold text-[30px]">
                    Forgot Password
                  </h1>
                  <h1 className="text-[#808080]  font-semibold text-[25px] mt-5">
                    Enter Email
                  </h1>

                  <div className="mt-[5px]">
                    <input
                      placeholder="Email Address"
                      class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[400px] p-4 py-4 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-[50px] ml-[140px]">
              <button className="bg-[#ca0000] text-white px-[15px] py-3 rounded-lg transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white">
                <p className="font-bold text-[20px]  ">Forget</p>
              </button>
            </div>

            <div className="w-full">
              <div className="ml-[60px] mt-[200px]">
                <h1 className="font-normal text-[20px]">
                  Don’t Have a Account?
                  <span className="font-bold cursor-pointer">Sign up</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="w-[70%]">
            <div className="w-full h-screen">
              <img className="h-screen w-full" src={forget2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;

import React from "react";
import logo from "../assets/admin.jpg";
import register1 from "../assets/Register.jpg";
const Register = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex justify-between ">
          <div className="w-[40%]">
            <div className="justify-center flex mt-[50px]">
              <img className="w-[100px]" src={logo} alt="" />
            </div>

            <div className="w-full text-center">
              <h1 className=" text-[25px] font-semibold">Be a Clareans</h1>
              <h1 className="text-[#CA0000] text-[30px] font-bold">
                St. Clare College of Caloocan{" "}
              </h1>
            </div>

            <div className="w-full">
              <div className="flex  justify-between p-[30px] mt-[40px]">
                <div className="">
                  <input
                    placeholder="Last Name"
                    class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[290px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                    type="text"
                  />
                </div>
                <div className="">
                  <input
                    placeholder="First Name"
                    class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[290px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                    type="text"
                  />
                </div>

                <div className="">
                  <input
                    placeholder="Middle Name"
                    class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[120px] p-2 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="ml-[30px]">
                <input
                  placeholder="Address"
                  class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[710px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  type="text"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="ml-[30px] mt-[30px]">
                <input
                  placeholder="Email"
                  class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[710px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  type="text"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="ml-[30px] mt-[30px]">
                <input
                  placeholder="Contact Number"
                  class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[710px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  type="text"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="ml-[30px] mt-[30px]">
                <input
                  placeholder="Password"
                  class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[710px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  type="text"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="ml-[30px] mt-[30px]">
                <input
                  placeholder="Confirm Password"
                  class="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-[710px] p-4 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  type="text"
                />
              </div>
            </div>

            <div className="w-full mt-[150px] flex justify-center">
              <button className="bg-[#ca0000] text-white px-[15px] py-3 rounded-lg transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white">
                <p className="font-bold text-[20px]  ">Enter</p>
              </button>
            </div>
          </div>

          <div className="w-[60%]">
            <div className="w-full h-screen">
              <img className="w-full h-screen" src={register1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

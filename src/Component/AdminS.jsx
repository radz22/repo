import React from "react";
import admin from "../assets/admin.jpg";
import { FaTrash } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminS = () => {
  return (
    <>
      <div className="W-full h-screen">
        <div className="w-full">
          <div className="flex justify-between   ">
            <div className="w-[25%] h-screen bg-gray-900 shadow-md  ">
              <div className="justify-center flex mt-5">
                <img className="w-[30%]" src={admin} alt="" />
              </div>
              <div className="w-full ">
                <div className="text-center">
                  <h1 className="text-white text-[35px] font-semibold">
                    St.Clare Collage Caloocan
                  </h1>
                </div>
              </div>
              <div className="w-full mt-[200px]">
                <div className=" ml-[50px] flex gap-3">
                  <svg
                    className="bg-white flex justify-center  rounded   "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
                    />
                  </svg>
                  <h1 className="text-[30px] font-semibold text-[#ffffffab] cursor-pointer transition hover:text-[#fff]">
                    Dashboard
                  </h1>
                </div>
              </div>

              <hr className="bg-white w-[80%]  ml-[50px] mt-2 border-2"></hr>

              <div className="w-full mt-[50px]">
                <div className=" ml-[50px] flex gap-3 ">
                  <svg
                    className="bg-white flex justify-center rounded "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      fill="currentColor"
                      d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"
                    />
                  </svg>
                  <h1 className="text-[30px] font-semibold text-[#ffffffab] cursor-pointer transition hover:text-[#fff] ">
                    Student
                  </h1>
                </div>
              </div>

              <hr className="bg-[#ffffffad] w-[80%]  ml-[50px] mt-2  border-2"></hr>

              <div className="w-full mt-[50px]">
                <div className=" ml-[50px] flex gap-3">
                  <svg
                    className="bg-white flex justify-center   rounded  "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
                    />
                  </svg>
                  <h1 className="text-[30px] font-semibold text-[#ffffffab] cursor-pointer transition hover:text-[#fff]">
                    Logout
                  </h1>
                </div>
              </div>

              <hr className="bg-[#ffffffad] w-[80%]  ml-[50px] mt-2 border-2"></hr>
            </div>

            <div className="w-[75%] ">
              <div className="w-[85%] bg-[#f0f0f0] ml-24 mt-[50px] rounded-lg shadow-md  ">
                <div className="p-5 ml-6 ">
                  <div className="flex ">
                    {" "}
                    <h1 className="mt-1 text-[30px] font-bold gap-20 ">
                      Student List
                    </h1>
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search Id "
                        className="rounded-full outline-none  font-bold p-2 w-[400px] ml-[160px] mt-2 mr-1   shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                      />
                    </div>
                    <div className="gap-2 relative">
                      <button className="bg-[#ca0000] text-white font-bold rounded-full m-2  px-[20px] py-1  transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] ">
                        <h1 className=" font-semibold text-[20px]">Enter</h1>
                      </button>
                    </div>
                  </div>
                </div>
                ;
              </div>

              <div className="w-[85%] bg-[#f0f0f0] ml-24 mt-2 rounded-lg shadow-md ">
                <div className="pl-10 py-4">
                  <h1 className="text-[30px] font-bold text-center">
                    BSCS_3A_3rdYear_2nd Sem
                  </h1>
                </div>
              </div>

              <div className="w-[85%] bg-[#f0f0f0] ml-24 mt-10 rounded-lg shadow-md ">
                <div className="p-5 ml-5 text-center   flex">
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Id Stu</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">0966996</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Name</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">
                        Rodel S. Santillan
                      </h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Age</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">16</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Lrn</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">09085148826</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Year</h1>
                    </div>

                    <div className="">
                      <h1 className="text-[15px] font-semibold">3yr Collage</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Course</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">Bscs</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Section</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">3a</h1>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Sched</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">M/W/F</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Contact</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">09085148826</h1>
                    </div>
                  </div>

                  <div className="w-full">
                    {" "}
                    <div className="pl-10 p-1 flex gap-3 ">
                      <div className="mt-2 cursor-pointer">
                        <FaTrash color="red" size="1.6rem" />
                      </div>

                      <div className="mt-2 cursor-pointer">
                        <FaUserEdit color="Green" size="1.6rem" />
                      </div>

                      <div className=" ml-2">
                        <button className="bg-[#ca0000] text-white font-bold rounded-full   px-[20px] py-1  transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white drop-shadow-sm  shadow-lg">
                          <h1 className=" font-semibold text-[20px]">Save</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[85%] bg-[#f0f0f0] ml-24 mt-2 rounded-lg shadow-md ">
                <div className="p-5 ml-5 text-center   flex">
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Id Stu</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">0966996</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Name</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">
                        Rodel S. Santillan
                      </h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Age</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">16</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Lrn</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">09085148826</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Year</h1>
                    </div>

                    <div className="">
                      <h1 className="text-[15px] font-semibold">3yr Collage</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Course</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">Bscs</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Section</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">3a</h1>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Sched</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">M/W/F</h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Contact</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-semibold">09085148826</h1>
                    </div>
                  </div>

                  <div className="w-full">
                    {" "}
                    <div className="pl-10 p-1 flex gap-3 ">
                      <div className="mt-2 cursor-pointer">
                        <FaTrash color="red" size="1.6rem" />
                      </div>

                      <div className="mt-2 cursor-pointer">
                        <FaUserEdit color="Green" size="1.6rem" />
                      </div>

                      <div className=" ml-2">
                        <button className="bg-[#ca0000] text-white font-bold rounded-full   px-[20px] py-1  transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white drop-shadow-sm  shadow-lg">
                          <h1 className=" font-semibold text-[20px]">Save</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminS;

import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="w-full h-screen  ">
        <div className="flex justify-between bg-red">
          <div className="w-[60%]">
            <div className="p-6">
              <IoMdArrowRoundBack size="2.5rem" />
            </div>
            <div className="flex mt-[250px]">
              <div className=" pl-[70px] pt-[70px]">
                <div className="">
                  <h1 className="text-[30px] font-bold">Your Profile:</h1>
                </div>
                <div className="flex gap-2">
                  <h1 className="text-[50px] font-bold ">Rodel S. Santillan</h1>

                  <div className="mt-10">
                    <h1 className="text-[15px] font-bold">#0996622777</h1>
                  </div>
                </div>

                <div className="  w-full">
                  <div className="flex gap-2">
                    <div className="">
                      <h1 className="text-[15px] font-bold">Lrn:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">090851488261</h1>
                    </div>

                    <div className="ml-5">
                      <h1 className="text-[15px] font-bold">Course:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">BSCS</h1>
                    </div>

                    <div className="ml-5">
                      <h1 className="text-[15px] font-bold">Section:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">3A</h1>
                    </div>

                    <div className="ml-5">
                      <h1 className="text-[15px] font-bold">Sem:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">2nd Sem</h1>
                    </div>

                    <div className="ml-5">
                      <h1 className="text-[15px] font-bold">Status:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">Old</h1>
                    </div>

                    <div className="ml-5">
                      <h1 className="text-[15px] font-bold">Year:</h1>
                    </div>
                    <div className="">
                      <h1 className="text-[15px] font-bold">
                        3rd Year Collage
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="w-full h-screen">
              <img className="w-full h-screen" src={login} alt="" />
            </div>
          </div>
        </div>
        <div className=" bg-[#000000] py-5 ">
          <div className="w-full ">
            <div className="flex justify-between">
              <div className="mt-[5px]">
                <div className="flex gap-5  ">
                  <p className="text-[#919191] text-[17px] font-semibold ml-[300px] mr-[200px]">
                    Copyright © 2024 ST. CLARE ONLINE EDUCATION SYSTEM - All
                    Rights Reserved.
                  </p>

                  <div className="flex  cursor-pointer mr-[150px] gap-5">
                    <FaFacebook color="blue" size="2rem" />

                    <FaYoutube color="red" size="2rem" />
                  </div>
                  <div className="">
                    <p className="text-[#919191] text-[17px] font-semibold ">
                      ST. CLARE ONLINE EDUCATION SYSTEM
                    </p>
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

export default Profile;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ims from "../assets/ims.jpg";
import ims1 from "../assets/ims1.jpg";
import ims2 from "../assets/ims2.jpg";
import ims3 from "../assets/ims3.jpg";
import ims4 from "../assets/ims4.jpg";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Ims = () => {
  const [data, setData] = useState({});

  const { id } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/userRoutes/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen w-full   bg-[#000000] ">
      <div className="w-full  h-[100px] bg-[#000000] text-white fixed">
        <div className="flex justify-between  ">
          <div className="w-[50%] p-7 cursor-pointer ">
            <Link to="/home">
              <h1 className="text-[30px] ml-[50px] font-semibold ">
                St.Clare Caloocan
              </h1>
            </Link>
          </div>
          <div className="w-[50%] p-7 cursor-pointer ">
            <div className="flex text-center items-center gap-4 text-[25px] ml-[300px] font-semibold">
              <Link to="/home">
                <p className="rounded-md w-[100px] h-[45px]   hover:bg-[#c7c2c260] ">
                  Home
                </p>
              </Link>
              <Link to="/about">
                <p className="rounded-md w-[100px] h-[45px]  hover:bg-[#c7c2c260] ">
                  About
                </p>
              </Link>
              <Link to="/ims">
                <p className="rounded-md w-[100px] h-[45px]   hover:bg-[#c7c2c260] ">
                  Ims
                </p>
              </Link>
              <div>
                <p className="rounded-md w-[100px] h-[45px] bg-[#c7c2c260] hover:bg-[#c0c0c0b4] ">
                  {" "}
                  {data.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex  justify-between">
          <div className="w-[50%]">
            <img className="h-[600px]" src={ims} alt="" />
          </div>
          <div className="w-[50%] bg-white">
            <div className="p-[60px] mt-[100px] ">
              <h1 className="text-[40px] font-bold">
                INSTITUTIONAL MANAGEMENT SYSTEM
              </h1>
              <div className="mt-[20px] text-[#666666] ">
                <p className="text-[30px] ">
                  (IMS) is an element that enables the school to facilitate the
                  storage, organization and retrieval of information. This is
                  where the students may have their enrolment procedures. Thus,
                  this element provides a platform where the faculty needs to
                  log-in/time-in for their virtual classes’ attendance.{" "}
                </p>

                <div className="flex gap-5 mt-5 ml-[320px] cursor-pointer">
                  <FaFacebook color="blue" size="2rem" />

                  <FaYoutube color="red" size="2rem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[black]">
        <div className="w-full ">
          <div className="pl-[300px] pt-[30px]">
            <h1 className="text-[40px] font-bold text-white">
              ENROLLMENT FOR SCHOOL YEAR 2023-2024
              <hr class="h-px my-4  border-0 bg-[#919191] w-[82%]"></hr>
            </h1>
          </div>
          <div className="w-full">
            <div className="grid-rows-3 flex gap-[100px] rounded-full pl-[300px] mt-[30px] ">
              <div className="">
                <div className="">
                  <img className="rounded-full " src={ims1} />
                  <div className="text-center ">
                    <h1 className="text-white text-[25px]">
                      Basic Ed (Pre-school to Grade 10)
                    </h1>
                    <p className="text-[#A4A4A4] text-[20px]">
                      Pre-school, Grade 1 to 10
                    </p>
                  </div>
                  <div className="">
                    <div className="mt-[30px] ml-[110px] mb-[80px]">
                      <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline">
                        <p className="font-semibold text-[20px]">Enroll Here</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <img className="rounded-full" src={ims2} />
                  <div className="text-center ">
                    <h1 className="text-white text-[25px]">
                      Senior High School (Grade 11 & 12)
                    </h1>
                    <p className="text-[#A4A4A4] text-[20px]">
                      ABM, Arts & Design, TVL-ICT, TVL-HE, HUMSS
                    </p>
                  </div>
                  <div className="">
                    <div className="mt-[30px] ml-[110px]">
                      <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline">
                        <p className="font-semibold text-[20px]">Enroll Here</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <img className="rounded-full" src={ims3} />
                  <div className="text-center ">
                    <div className="">
                      <h1 className="text-white text-[25px]">
                        Tertiary/College | 2nd sem
                      </h1>
                    </div>
                    <div className="">
                      <p className="text-[#A4A4A4] text-[15px]">
                        BSCS, BSHM, BSTM, BSBA, BEED,BSED-ENG, <br></br>
                        BSED-MATH, AB POLSCI
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-[10px] ml-[110px]">
                      <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline">
                        <p className="font-semibold text-[20px]">Enroll Here</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex justify-between">
          <div className="w-[50%] ">
            <div className="ml-[200px] mt-[30px]">
              <h1 className="text-[25px] font-semibold">
                FACULTY CORNER 2023-2024
              </h1>
              <hr class="h-px my-4  border-0 bg-[#000000] w-[82%]"></hr>
            </div>
            <div className="ml-[200px] mt-[60px]">
              <p className="">SHS FACULTY ATTENDANCE MONITORING</p>

              <div className="mt-[20px] ">
                <button className="bg-[#ca0000] font-bold text-white px-[15px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#ffffff] hover:text-[#ca0000] hover:outline">
                  <p className="font-semibold text-[20px]">
                    shs online attendance
                  </p>
                </button>
              </div>
            </div>

            <div className="ml-[200px] mt-[20px]">
              <p className="">TERTIARY FACULTY ATTENDANCE MONITORING</p>
              <Link to="/profile">
                <div className="mt-[ 20px] ">
                  <button className="bg-[#ca0000] font-bold text-white px-[15px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#ffffff] hover:text-[#ca0000] hover:outline">
                    <p className="font-semibold text-[20px]">
                      TERTIARY ONLINE ATTENDANCE
                    </p>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-[50%]">
            <div className="">
              <img className="h-[400px] w-full" src={ims4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="w-full h-[30%] bg-[#000000] py-5 ">
          <div className="w-full ">
            <div className="flex justify-between">
              <div className="mt-[5px]">
                <div className="flex gap-5  ">
                  <p className="text-[#919191] text-[17px] font-semibold ml-[80px] mr-[200px]">
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
      </footer>
    </div>
  );
};

export default Ims;

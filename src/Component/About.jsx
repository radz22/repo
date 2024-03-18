import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import about from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";
const About = () => {
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
        <div className="w-full">
          <h1 className="font-bold text-[45px] text-white pt-[100px] pl-[300px] mb-[50px]">
            ENROLLMENT FOR SCHOOL YEAR 2023-2024
            <hr class="h-px my-4  border-0 bg-[#919191] w-[82%]"></hr>
          </h1>
        </div>
        <div className="w-full ">
          <div className="  flex justify-between ">
            <div className="w-[50%] ">
              <div className="pl-[300px] ">
                <div className="w-[100%]] h-[200px]  ">
                  <img src={about} />
                </div>
              </div>
            </div>
            <div className="w-[50%] ">
              <div className="mr-[200px]  ">
                <h1 className="text-white text-[40px] font-semibold">
                  ONLINE ENROLLMENT
                </h1>
                <div className="mt-[30px]">
                  <p className="text-[#919191] text-[25px]">
                    Simplified and Seamless: Enroll Online with Ease for a
                    Bright Academic Journey!{" "}
                  </p>
                </div>
                <div className="mt-[30px] p-8">
                  <ul className="text-[#919191]">
                    <li className=" text-[25px]  font-bold  ">
                      PRE-SCHOOL TO JUNIOR HIGH
                    </li>
                    <p className=" font-bold  text-[25px] ">
                      SENIOR HIGH SCHOOL
                    </p>
                    <li className="text-[20px] ">
                      ABM, HUMSS, ARTS & DESIGN, TVL-ICT, TVL-HE
                    </li>
                    <p className="  font-bold  text-[25px]">TERTIARY</p>
                    <li className=" text-[20px] ">
                      BEED, BSED-ENG, BSED-MATH, BSCS, BSBA, BSHM, BSTM, AB
                      POLSCI
                    </li>
                  </ul>
                </div>
                <div className="w-full ">
                  <div className="">
                    <div className="mt-[20px] ml-[0px]">
                      <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline">
                        <p className="font-semibold text-[20px]">Enroll Now</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="w-[50%]  mt-[250px]">
              <div className="ml-[300px]">
                <h1 className="  text-white text-[45px] font-semibold ">
                  CHOOSE YOUR MODALITY
                </h1>
                <p className="text-[28px] text-[#919191] mr-[50px] mt-6">
                  Personalized Learning Pathways: Empowering Students to Choose
                  Their Ideal Modality for Success - Full Online or Blended!
                </p>
              </div>
              <div className="">
                <div className="mt-[20px] ml-[300px]">
                  <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline">
                    <p className="font-semibold text-[20px]">Enroll Here</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[50%]   mt-[100px]">
              <div className="text-white mr-[300px] ">
                <img src={about1} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#000000]">
        <div className="flex justify-between ">
          <div className="w-[50%] mt-[50px]">
            <div className="ml-[300px]">
              <div className="w-full">
                <img src={about2} />
              </div>
            </div>
          </div>

          <div className="w-[50%] ">
            <div className="mr-[300px] mt-[50px]">
              <div className="text-[35px]">
                <h1 className="text-white">
                  Empower Your Future with St. Clare College: Where Success
                  Begins
                </h1>
              </div>
              <div className="mt-10 text-[20px]  text-[#919191] pr-8">
                <p>
                  Are you ready to invest in your future and unlock your full
                  potential? St Clare College is your ultimate destination to
                  master in-demand skills for the 21st century. Don't miss the
                  opportunity to be at the forefront of success – enroll this
                  semester and take the first step towards a brighter tomorrow!
                </p>

                <p className="mt-10">
                  Secure your future with St Clare College and join our thriving
                  community of achievers! Click the link below to apply now and
                  unlock a world of limitless possibilities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="w-full h-[30%] bg-[#000000] py-10 ">
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
      </footer>
    </div>
  );
};

export default About;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import home from "../assets/home.jpg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";
import home6 from "../assets/home6.jpg";
import home7 from "../assets/home7.jpg";
import home8 from "../assets/home8.jpg";
import home9 from "../assets/home9.jpg";
import home10 from "../assets/home10.jpg";
import home11 from "../assets/home11.jpg";
import home12 from "../assets/home12.jpg";
import home13 from "../assets/home13.jpg";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Home = () => {
  // const [data, setData] = useState({});

  // const { id } = useContext(Context);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4001/userRoutes/${id}`)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
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
                {/* <div>
                  <p className="rounded-md w-[100px] h-[45px] bg-[#c7c2c260] hover:bg-[#c0c0c0b4] ">
                    {" "}
                    {data.email}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="z-1 ">
            <img className="h-[90%]" src={home} alt="" />
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="ml-[300px]">
            <h1 className="text-white text-[25px] font-bold gap-5">TERTIARY</h1>
            <hr class="h-px  border-0 bg-[#919191] w-[82%]"></hr>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="" src={home1} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[70px] pr-[200px] text-center">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[16px] mt-[20px] ">
                  Bachelor of Science in Hospitality Management will equip the
                  students with competencies that are needed to execute
                  operational tasks and maintain management functions in food
                  production (culinary), accommodation, food and beverage
                  service, tourism planning and product development, events
                  planning, travel and tour operations and other sectors of the
                  hospitality industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px] text-center mt-[100px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[20px] ">
                  The Bachelor of Science in Business Administration (BSBA)
                  program is geared towards equipping students with the
                  necessary knowledge, skills and attitude to provide quality
                  service in the field of business and industry, such as perform
                  the basic functions of management such as planning,
                  organizing, leading and controlling, demonstrate knowledge of
                  business industry, local product and services. Its primary
                  concentration is on development of theoretical classes,
                  practicum exercises and experiential learning.
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px]" src={home2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="" src={home3} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[50px] pr-[200px] text-center">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF SCIENCE IN COMPUTER SCIENCE
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[16px] mt-[20px] ">
                  The BS in Computer Science course prepares you for proficiency
                  in designing, writing and developing computer programs and
                  computer networks. The field incorporates the study of
                  computer algorithms and their implementation through computer
                  software applications, data processing, web development,
                  programming and computer architecture. You will also attain
                  skills in building computer networks. Classroom lectures will
                  equip you with theoretical framework of computer science, but
                  the key learning experiences will take place in computer
                  laboratories where you will experiment with software
                  applications, programming tools an actual computer design
                  using hardwar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px] text-center mt-[120px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF ELEMENTARY EDUCATION BACHELOR OF SECONDARY
                  EDUCATION MAJOR IN ENGLISH & MATH
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[20px] ">
                  The BEED is an undergraduate teacher education degree program
                  designed to prepare individuals intending to teach in the
                  elementary level. The BSEd is an undergraduate teacher
                  education program designed to equip learners with adequate and
                  relevant competencies to teach in their chosen area of
                  specialization/major in the secondary level.
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px]" src={home4} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="" src={home5} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[70px] pr-[200px] text-center">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF SCIENCE IN TOURISM MANAGEMENT
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[16px] mt-[20px] ">
                  The program related to the fields of hospitality and tourism
                  education will equip students with competencies that are
                  needed to execute operational tasks and management functions
                  in food production (culinary), accommodation, food and
                  beverage service, tourism planning and product development,
                  events planning, transportation services, travel and tour
                  operations and other emerging sectors of hospitality and
                  tourism industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px] text-center mt-[120px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  BACHELOR OF ARTS IN POLITICAL SCIENCE
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[20px] ">
                  Bachelor of Arts in Political Science will equip the students
                  to achieved through a more detailed list of core competencies
                  expressed as behaviors that can be observed and assessed and
                  second is to prepare the students for professional career in
                  government service, or for careers dealing with public issues
                  and problems. The curriculum is designed to expose the
                  students to a variety of program work and activities that will
                  provide a broad understanding of the curriculum.
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px]" src={home6} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="ml-[300px] pt-[100px]">
            <h1 className="text-white text-[25px] font-bold gap-5">
              SENIOR HIGH SCHOOL
            </h1>
            <hr class="h-px   border-0 bg-[#919191] w-[82%]"></hr>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="" src={home7} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[50px] pr-[200px] text-center">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  ARTS & DESIGN
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[16px] mt-[20px] ">
                  The Arts & Design track will prepare you as you wander around
                  the design, performative, and creative industry. What this
                  track aims is to get you a career in the creative field after
                  you graduate. Breaking the stereotype that is there no careers
                  in this industry, you’ll be surprised how fun the Arts and
                  Design world can be. To instill the right employment skills so
                  that you can get a job immediately after graduation, part of
                  the curriculum of this track is to expose you to various form
                  of media such as architecture, interior design, industrial
                  design, graphic design, animation, painting, fashion design,
                  photography, and film.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px]  mt-[120px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] text-center ">
                  ACADEMIC TRACK
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[20px] ">
                  <span className="font-bold"> ABM </span>- strand in its most
                  fundamental sense refers to the accountancy, business, and
                  management academic programs that concentrate on the
                  foundational concepts in corporate operations, financial
                  management, business management, as well as each and every
                  factor that revolves around those central fields.
                </p>
                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[10px]">
                  <span className="font-bold"> HUMSS </span> - stands for
                  Humanities and Social Sciences. This strand focuses on the
                  study of human behavior and societal changes, and analysis of
                  arts, culture, literature, and politics. It involves political
                  science, anthropology, linguistics, psychology, and
                  communication.
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px]" src={home8} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[50px] ">
                <img className="" src={home9} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[70px] pr-[200px] text-center">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  TVL - INFORMATION, COMMUNICATION TECHNOLOGY
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[16px] mt-[20px] ">
                  Information and Communication Technology (ICT) in education is
                  the mode of education that use information and communications
                  technology to support, enhance, and optimize the delivery of
                  information. Worldwide research has shown that ICT can lead to
                  an improved student learning and better teaching methods. It
                  refers to technologies that provide access to information
                  through telecommunications. It is similar to Information
                  Technology (IT), but focuses primarily on communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px]  mt-[100px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] text-center">
                  TVL - HOME ECONOMICS
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[17px] mt-[20px] ">
                  <span className=" font-bold ">TVL </span>– HE is designed to
                  develop students’ skills useful for livelihood projects at
                  home. It provides a curriculum that is a combination of core
                  courses required for all SHS strands and specialized
                  hands-on-courses that meet the standard hour requirement and
                  competency- based assessment of TESDA. Student in this strand
                  undergo TESDA assessment for National Certification ( NC’s)
                  that increase their employability after graduation from SHS.
                  They can also take degree courses in college especially those
                  which are related to business entrepreneurship, culinary arts,
                  hospitality and tourism management, nutrition, food
                  technology, food management, fashion management, and interior
                  design. TVL-HE offers three specializations: Bread and Pastry
                  Production, Food and Beverage Service, and Housekeeping.
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px] h-[370px]" src={home10} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="ml-[300px] pt-[100px]">
            <h1 className="text-white text-[25px] font-bold gap-5">
              BASIC EDUCATION
            </h1>
            <hr class="h-px   border-0 bg-[#919191] w-[82%]"></hr>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="" src={home11} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[120px] pr-[200px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px]  ">
                  NURSERY & KINDERGARTEN
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[20px] mt-[20px] ">
                  Nurturing Young Minds: Where Curiosity and Growth Blossom in
                  Kindergarten!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <div className="ml-[300px]  mt-[220px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px] ">
                  ELEMENTARY - Grade 1 to 6
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[20px] mt-[20px] ">
                  Building Strong Foundations: Empowering Students for Lifelong
                  Learning in Elementary School
                </p>
              </div>
            </div>

            <div className="w-[50%] mt-[100px]">
              <div className=" ">
                <img className="w-[650px]" src={home12} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000]">
          <div className="flex justify-between ">
            <div className="w-[50%] ">
              <div className="ml-[300px] mt-[30px] ">
                <img className="w-[590px]" src={home13} alt="" />
              </div>
            </div>

            <div className="w-[50%]">
              <div className="mt-[150px] pr-[200px]">
                <h1 className="text-white font-semibold text-[30px] mr-[100px]  ">
                  JUNIOR HIGH SCHOOL - Grade 7 to 10
                </h1>

                <p className="text-[#919191] font-semibold pr-[100px] text-[20px] mt-[20px] ">
                  Unlocking Potential, Shaping Futures: Thriving in Junior High
                  School's Journey of Growth and Discovery!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30%] bg-[#000000] py-5 ">
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
      </div>
    </>
  );
};

export default Home;

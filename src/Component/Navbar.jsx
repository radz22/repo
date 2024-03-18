import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="h-[100px] flex justify-between z-50 text-white lg:py-6 px-20 py-4 flex-1 bg-black">
        <div className="text-[30px] ml-[50px] font-semibold">
          <Link to="/home">
            <span>St.Clare Collage Caloocan</span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal">
          <div className="flex-10">
            <div className="flex text-center items-center   gap-10  text-[25px] mr-[300px] font-semibold">
              <Link to="/home">
                <p className="hover:bg-[#80808060]">Home</p>
              </Link>

              <Link to="/about">
                <p>About</p>
              </Link>

              <Link to="/ims">
                <p>Ims</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

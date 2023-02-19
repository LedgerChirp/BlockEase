import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";

const dashboard = () => {
  //   let [dark, setDark] = useState(false);

  return (
    <div className="flex flex-row bg-white dark:bg-[#182747]">
      <Sidebar />
      <div className="w-2/3">
        <div id="price" className="text-center h-20">
          <h1 className="font-semibold text-xl">Available Balance</h1>
          <p className="font-bold text-3xl tracking-wide">
            655125 $ / 128.96 ETH
          </p>
        </div>
        <div className="h-1/2 flex flex-row">
          <div className="bg-[#DCEAF8] p-10 w-1/2 rounded-2xl m-10"></div>
          <svg
            width="3"
            height="300"
            viewBox="0 0 3 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-10"
          >
            <line
              x1="1.25"
              x2="1.25"
              y2="300"
              stroke="#888888"
              stroke-width="3"
            />
          </svg>

          <div className="bg-[#DCEAF8] p-10 w-1/2 rounded-2xl m-10"></div>
        </div>
        <div className=" rounded-2xl bg-[#DCEAF8] p-10 m-10"></div>
      </div>
      <div className="bg-[#DCEAF8] rounded-2xl p-10 m-10 w-auto">
        <div id="profile" className="text-center text-xl font-bold">
          <div className="rounded-full m-10 bg-white h-36 w-36">
            <img src="" alt="" />
          </div>
          <h1 className="uppercase mb-2">Satoshi Uncle</h1>
          <p className="">ID : z125fhi576ed546</p>
        </div>
        <div className="w-60 h-60 bg-white mx-auto my-10"></div>
        <button className="px-8 py-3 font-semibold border border-black rounded-full">
          Share QR
        </button>
      </div>
    </div>
  );
};

export default dashboard;

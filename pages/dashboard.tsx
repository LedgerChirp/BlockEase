import React from "react";
import { useState } from "react";

const dashboard = () => {
  //   let [dark, setDark] = useState(false);
  let [color, setColor] = useState("black");
  //   function darkMode() {
  //     setDark(!dark);
  //   }
  function changeColor() {
    if (color === "white") {
      setColor("black");
    } else {
      setColor("white");
    }
  }
  return (
    <div className="flex flex-row bg-white dark:bg-[#182747]">
      <div className="mx-5 h-screen my-9 w-20 bg-[#DCEAF8] rounded-t-3xl flex flex-col rounded-b-3xl">
        {/* <label className="switch" onClick={darkMode}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label> */}
        <button className="mx-auto my-5" onClick={changeColor} key={1}>
          <svg
            width="23"
            height="43"
            viewBox="0 0 33 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0301 3.05176e-05L15.6797 1.19024V35.7242L16.0301 36.0737L32.06 26.5983L16.0301 3.05176e-05Z"
              fill={`${color}`}
            />
            <path
              d="M16.0304 0L0 26.5983L16.0304 36.0737V19.3119V0Z"
              fill={`${color}`}
            />
            <path
              d="M16.0305 39.1088L15.833 39.3497V51.6512L16.0305 52.2277L32.0702 29.6383L16.0305 39.1088Z"
              fill={`${color}`}
            />
            <path
              d="M16.0304 52.2277V39.1088L0 29.6383L16.0304 52.2277Z"
              fill={`${color}`}
            />
            <path
              d="M16.0303 36.0737L32.0602 26.5983L16.0303 19.3119V36.0737Z"
              fill={`${color}`}
            />
            <path
              d="M0 26.5983L16.0304 36.0737V19.3119L0 26.5983Z"
              fill={`${color}`}
            />
          </svg>
        </button>
        <button className="mx-auto my-5 " key={2}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0003 26.5C45.867 26.5004 46.7004 26.8343 47.3277 27.4324C47.9549 28.0305 48.3281 28.8471 48.3697 29.7128C48.4114 30.5786 48.1184 31.4271 47.5514 32.0827C46.9844 32.7383 46.187 33.1506 45.3243 33.2343L45.0003 33.25H17.1475L20.3875 36.49C21.0013 37.1015 21.3563 37.9256 21.3792 38.7917C21.4021 39.6578 21.091 40.4995 20.5104 41.1425C19.9298 41.7856 19.1241 42.1807 18.2602 42.2462C17.3963 42.3116 16.5404 42.0423 15.8695 41.494L15.613 41.2623L6.99779 32.6448C4.80629 30.4533 6.23279 26.7565 9.22754 26.5135L9.54254 26.5H45.0003ZM33.6153 2.74001C34.2056 2.14915 34.9941 1.79817 35.8282 1.75495C36.6623 1.71173 37.4828 1.97933 38.131 2.50601L38.3875 2.73776L47.0028 11.3553C49.1943 13.5468 47.7678 17.2435 44.773 17.4865L44.458 17.5H9.00029C8.13355 17.4996 7.3002 17.1657 6.67292 16.5676C6.04563 15.9695 5.67251 15.1529 5.63086 14.2872C5.5892 13.4215 5.88222 12.5729 6.44918 11.9173C7.01614 11.2617 7.81359 10.8494 8.67629 10.7658L9.00029 10.75H36.853L33.613 7.51001C32.981 6.87719 32.626 6.01939 32.626 5.12501C32.626 4.23063 32.9833 3.37282 33.6153 2.74001Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="mx-auto my-5 " key={3}>
          <svg
            width="20"
            height="34"
            viewBox="0 0 32 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.25 16.2477C0.252588 18.7258 0.840706 21.1682 1.96642 23.3758C3.09212 25.5835 4.72356 27.4938 6.72775 28.9512L6.73 28.9535C8.02018 29.8992 9.44744 30.6421 10.9622 31.1562L11.077 31.199C11.93 31.4774 12.8055 31.6814 13.6938 31.8087C14.4558 31.9306 15.226 31.9945 15.9977 32H16C16.7875 32 17.5525 31.9235 18.3108 31.811L18.7202 31.748C19.4762 31.6152 20.2142 31.4352 20.9275 31.2012L21.022 31.1652C27.25 29.0592 31.75 23.1755 31.75 16.2477C31.75 7.565 24.685 0.5 16 0.5C7.315 0.5 0.25 7.565 0.25 16.2477ZM16 5C22.201 5 27.25 10.0445 27.25 16.2477H22.75C22.7476 14.4585 22.0356 12.7432 20.7702 11.4782C19.5048 10.2132 17.7893 9.50178 16 9.5V5ZM5.92225 33.7887V45.5L16 42.125L26.0778 45.5L26.08 33.7887C23.0177 35.5639 19.5408 36.4988 16.0011 36.4988C12.4615 36.4988 8.98459 35.5639 5.92225 33.7887Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
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
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function QR() {
  const [acc, setAcc] = useState(null);
  const connect = async () => {
    const accounts = await window?.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        alert("Metamask Reject Your Request");
      });
    setAcc(accounts);
  };
  connect();
  return (
    <>
      <div className="flex flex-col bg-[#DCEAF8] rounded-3xl justify-evenly items-center w-[90%] py-8 mx-auto mt-[3rem]">
        <button className="space-y-10">
          <QRCodeSVG value={acc?.[0]} size={200} includeMargin={true} />
          <div className="flex flex-row justify-center items-center font-semibold text-xl border-solid border-[2px] border-black rounded-lg px-6 py-1">
            <div className="grid grid-rows-1 items-center mr-3">
              <Image src="/qrscan.svg" width={25} height={25} alt="logo" />
            </div>
            <h2>Scan</h2>
          </div>
        </button>
      </div>
    </>
  );
}

export default QR;

"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import {getFeeRate} from "@/api";
import {useWalletContext} from "@/context/wallet"

export const Balance = () => {

  const { account, setAccount } = useWalletContext();

  useEffect(() => {
    const interval = setInterval(async () => {
      
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-[14rem] relative transform-style-3d  duration-300">
      <Card className="mt-4 shadow-[0_1px_10px_rgba(0,0,0,0.1)] card transform-rotateY-180">
        <CardBody className=" px-4 ">
          <h1 className=" text-gray-400 text-sm">Your Balance</h1>
          <div className=" text-4xl text-gray-700 font-bold mb-2">
            1206.89<b className=" text-orange-500 text-xs">BTC</b><span className="text-base text-gray-400 font-normal"> ≈ $323,244</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className=" text-gray-400">BIIS Balance</span>
            <span className=" text-green-500">42,550 $BIIS</span>
          </div>
          <Card className=" my-4 rounded-lg shadow-none bg-[#FBF8F8]">
            <CardBody>
              <div className="flex items-center text-small text-center">
                <div className=" w-full">
                  <h1 className="text-3xl text-gray-700 font-bold">0</h1>
                  <div className="text-gray-400 text-sm">Order</div>
                </div>
                <Divider className="h-6" orientation="vertical" />
                <div className=" w-full">
                  <h1 className="text-3xl text-gray-700 font-bold">0</h1>
                  <div className="text-gray-400 text-sm">Pending</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
      <Card className=" bg-[url('/wallet/wallet_bg.svg')] bg-cover shadow-[0_1px_10px_rgba(0,0,0,0.1)] h-[14rem]  card cardBack">
         <CardBody className=" px-4">
            <div className=" flex justify-between items-center py-4">
              <div className=" flex flex-row gap-2 items-center ">
                <span className=" text-[2.5rem]">🙋</span>
                <span>
                  <h1 className=" text-base text-gray-400 leading-none">Wellcome</h1>
                  <h2 className=" text-3xl font-bold leading-none">Hello.</h2>
                </span>
              </div>
              <button onClick={()=>{
                  setAccount({
                    uinsat: "234",
                    okx: ""
                  })
                  console.log("setAccount")
                  console.log(account)
                }
              } className=" bg-black text-white py-2 px-4 rounded-md ">Connect Wallet  {account.unisat}{account.okx}</button>
            </div>
            <div className=" mt-2 mb-1 flex justify-between bg-white py-2 px-4 rounded-lg">
              <span className=" text-gray-400">BTC</span>
              <span className="text-gray-400">42,550 Sats <b className="text-green-500">(+59.11%)</b></span>
            </div>
            <div className=" flex justify-between bg-white py-2 px-4 rounded-lg">
              <span className=" text-gray-400">Biis Price</span>
              <span className="text-gray-400">42,550 Sats <b className="text-green-500">(+59.11%)</b></span>
            </div>
         </CardBody>
      </Card>
    </div>
  );
};

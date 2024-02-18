"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, Divider, Progress, Input } from "@nextui-org/react";
import clsx from "clsx";
import Decimal from "decimal.js";

interface gasProps {
  gas: string;
  btcPrice: number
}

export const TotalCost = ({ ...props }: gasProps) => {
  const { gas, btcPrice } = props;

  return (
    <>
      <h1 className=" text-base font-bold">Total Cost</h1>
      <div className=" w-full px-4 pt-6 pb-4 bg-[url('/app/bill_bg.svg')] bg-cover bg-no-repeat  bg-top">
        <div className=" flex justify-between text-gray-800">
          <span className="">Sats In Inscription</span>
          <span className=" text-right">
            <h1>{parseInt(gas) * 10} sats</h1>
            <p className="text-[#AFAFAF]">$0</p>
          </span>
        </div>
        <div className=" flex justify-between text-gray-800">
          <span className="">Network Fee</span>
          <span className=" text-right">
            <h1>0 sats</h1>
            <p className="text-[#AFAFAF]">$0</p>
          </span>
        </div>
        <div className=" flex justify-between text-gray-800">
          <span className="">Service Base Fee</span>
          <span className=" text-right">
            <h1>0 sats</h1>
            <p className="text-[#AFAFAF]">$0</p>
          </span>
        </div>
        <div className=" flex justify-between text-gray-800">
          <span className="">Total</span>
          <span className=" text-right">
            <h1>0 sats</h1>
            <p className="text-[#AFAFAF]">$0</p>
          </span>
        </div>
      </div>
    </>
  );
};

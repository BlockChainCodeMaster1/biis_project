"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import {getFeeRate} from "@/api";

export const Gas = () => {
    const [fees,setFees] = useState({
    minimumFee: 0,
    economyFee: 0,
    fastestFee: 0
  });
  useEffect(() => {
    const interval = setInterval(async () => {
      const feeRate = await getFeeRate();
      console.log(feeRate)
      setFees(feeRate);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4">
        <h1 className=" text-gray-800 text-lg font-bold">Gas fee</h1>
        <Card className=" my-2 rounded-lg shadow-[0_1px_10px_rgba(0,0,0,0.1)]">
          <CardBody>
            <div className="flex items-center text-small text-center">
              <div className="w-full">
                <h1 className="text-2xl text-gray-700 font-bold">{fees.minimumFee}</h1>
                <div className="text-gray-400 text-sm">Slow 🐢</div>
              </div>
              <Divider className="h-6" orientation="vertical" />
              <div className=" w-full">
                <h1 className="text-2xl text-gray-700 font-bold">{fees.economyFee}</h1>
                <div className="text-gray-400 text-sm">Normal 🚗</div>
              </div>
              <Divider className="h-6" orientation="vertical" />
              <div className=" w-full">
                <h1 className="text-2xl text-gray-700 font-bold">{fees.fastestFee}</h1>
                <div className="text-gray-400 text-sm">Fast 🚀</div>
              </div>
            </div>
          </CardBody>
        </Card>
        </div>
  );
};

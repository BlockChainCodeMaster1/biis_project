"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, Divider, Progress, Input } from "@nextui-org/react";
import {getFeeRate} from "@/api";
import clsx from "clsx";

interface gasProps {
  gas: string;
  changeGas: (value: string) => void;
}

export const GasModule = ({ ...props }: gasProps) => {
  const [gasTab, setGasTab] = useState(1);
  let { gas, changeGas } = props;

  const [fees, setFees] = useState({
    minimumFee: 0,
    economyFee: 0,
    fastestFee: 0,
  });
  useEffect(() => {
    const interval = setInterval(async () => {
      const feeRate = await getFeeRate();
      setFees(feeRate);
      changeGas(feeRate.economyFee);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="font-bold">Gas setting</h1>
      <Card className=" my-2 rounded-lg shadow-none border-1 ">
        <CardBody className="py-2">
          <div className="flex items-center text-small text-center">
            <div
              className={clsx(
                "w-full",
                "rounded-lg",
                " cursor-pointer",
                gasTab == 0 ? "bg-[#ffc037]" : "bg-none"
              )}
              onClick={() => {
                setGasTab(0);
                changeGas(String(fees.minimumFee));
              }}
            >
              <h1 className="text-2xl font-bold text-gray-700">
                {fees.minimumFee}
              </h1>
              <div className="text-sm">Slow 🐢</div>
            </div>
            <Divider className="h-6" orientation="vertical" />
            <div
              className={clsx(
                "w-full",
                "rounded-lg",
                " cursor-pointer",
                "py-1",
                gasTab == 1 ? "bg-[#ffc037]" : "bg-none"
              )}
              onClick={() => {
                setGasTab(1);
                changeGas(String(fees.economyFee));
              }}
            >
              <h1 className="text-2xl font-bold text-gray-700">
                {fees.economyFee}
              </h1>
              <div className="text-sm">Normal 🚗</div>
            </div>
            <Divider className="h-6" orientation="vertical" />
            <div
              className={clsx(
                "w-full",
                "rounded-lg",
                " cursor-pointer",
                "py-1",
                gasTab == 2 ? "bg-[#ffc037]" : "bg-none"
              )}
              onClick={() => {
                setGasTab(2);
                changeGas(String(fees.fastestFee));
              }}
            >
              <h1 className="text-2xl font-bold text-gray-700">
                {fees.fastestFee}
              </h1>
              <div className="text-sm">Fast 🚀</div>
            </div>
            <Divider className="h-6" orientation="vertical" />
            <div
              className={clsx(
                "w-full",
                "rounded-lg",
                " cursor-pointer",
                "py-1",
                gasTab == 3 ? "bg-[#ffc037]" : "bg-none"
              )}
              onClick={() => setGasTab(3)}
            >
              <h1
                className={clsx(
                  "text-2xl",
                  "font-bold",
                  gasTab == 3 ? "text-white" : "text-gray-700"
                )}
              >
                <Input
                  type="number"
                  label=""
                  placeholder="0"
                  labelPlacement="outside"
                  min="0"
                  //   className=" opacity-0"
                  value={gas}
                  onValueChange={(value) => {
                    changeGas(value);
                  }}
                  //   onChange={changeGas(gas)}
                  classNames={{
                    // label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "hover:bg-transparent",
                      "text-center",
                      "text-2xl",
                    ],
                    inputWrapper: [
                      "shadow-none",
                      "hover:shadow-none",
                      "bg-transparent",
                      "backdrop-none",
                      "hover:bg-none",
                      "group-data-[focus=true]:bg-transparent",
                      "group-data-[hover=true]:bg-transparent",
                    ],
                  }}
                />
              </h1>
              <div className="text-sm">Custom 🚗</div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className=" my-2 rounded-lg shadow-none border-1">
        <CardBody className="py-2">
          <h1 className=" text-base">Estimated time</h1>
          <Progress
            size="md"
            radius="sm"
            classNames={{
              base: " w-full !flex !flex-row !flex-row-reverse whitespace-nowrap items-center  ",
              track: "border border-none w-full",
              indicator: "bg-gradient-to-r from-green-100 to-green-500  w-full",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            value={100}
            showValueLabel={true}
            valueLabel={
              <span className=" text-[#58BF6D] font-bold text-xs">10 Mins</span>
            }
          />
        </CardBody>
      </Card>
    </>
  );
};

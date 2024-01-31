"use client";

import { Balance } from "@/components/balance";
import { Gas } from "@/components/gas";
import { Blocks } from "@/components/blocks";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import {
  Button,
  Autocomplete,
  AutocompleteItem,
  Avatar,
  CheckboxGroup,
  Card,
  CardBody,
  Divider,
  Progress,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { Back, Order, Forward, SearchIcon, Add } from "@/components/icons";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import { useState } from "react";
import clsx from "clsx";

export default function AppPage() {
  const users = [
    {
      id: 1,
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      role: "Tech Lead",
      team: "Development",
      status: "paused",
      age: "25",
      email: "zoey.lang@example.com",
    }
  ];
  const [groupSelected, setGroupSelected] = useState([]);
  const [gasTab, setGasTab] = useState(1);

  return (
    <>
      <div className=" w-16 h-full bg-white shadow-md shadow-gray-200">
        <SidebarWrapper />
      </div>
      <div className=" w-full flex flex-row">
        <div className=" w-9/12 m-3 mr-0 p-6 bg-white rounded-lg shadow-lg  h-full flex flex-col">
          <div className=" flex justify-between items-center">
            <div className=" flex flex-row gap-2">
              <Button
                isIconOnly
                className=" bg-[#F5F5F5]"
                size="md"
                radius="sm"
              >
                <Back size={24} />
              </Button>
              <span>
                <h1 className=" text-xl font-bold leading-6">Batch Tool</h1>
                <p className=" text-xs text-[#bfbfbf]">
                  Transfer assets from multiple accounts to multiple accounts
                </p>
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <Button
                isIconOnly
                className=" bg-[#F5F5F5]"
                size="md"
                radius="sm"
              >
                <Order size={24} />
              </Button>
              <Button
                className=" bg-[#FFC138] text-white text-base"
                size="md"
                radius="sm"
                endContent={<Forward size={12} />}
              >
                Let's do it
              </Button>
            </div>
          </div>
          <div className="flex flex-row h-full">
            <div className="my-2 border-dashed border-1 rounded-2xl flex flex-col w-1/3">
              <div className=" flex flex-row  gap-2 p-2">
                <Input
                  type="email"
                  label=""
                  placeholder="Search Wallet address"
                  labelPlacement="outside"
                  endContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <Button
                  isIconOnly
                  className=" bg-[#F5F5F5]"
                  size="md"
                  radius="sm"
                >
                  <Add size={24} />
                </Button>
              </div>
              <div className="flex flex-col gap-1 w-full overflow-auto h-full px-2">
                <CheckboxGroup
                  color="warning"
                  value={groupSelected}
                  onChange={setGroupSelected}
                  classNames={{
                    base: "w-full",
                  }}
                >
                  <CustomCheckbox
                    value="bc1q6tqs5kvjf5n5....dx0aw"
                    user={{
                      address: "bc1q6tqs5kvjf5n5....dx0aw",
                      amount: "1000",
                    }}
                  />
                </CheckboxGroup>
              </div>
            </div>
            <div className="w-1/3 flex items-center">
              <div className="flex flex-row w-full px-6 bg-[url(/app/long_arrow.svg)] bg-no-repeat bg-[length:100%_auto] bg-center">
                <div className="w-full border-3 border-black rounded-2xl">
                  <Select className="max-w-xs" label="Select country">
                    <SelectItem
                      key="argentina"
                      startContent={
                        <Avatar
                          alt="Argentina"
                          className="w-6 h-6"
                          src="https://flagcdn.com/ar.svg"
                        />
                      }
                    >
                      BIIS - 1000323
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="my-2 border-dashed border-1 rounded-2xl flex flex-col w-1/3">
              <div className=" flex flex-row  gap-2 p-2">
                <Input
                  type="email"
                  label=""
                  placeholder="Search Wallet address"
                  labelPlacement="outside"
                  endContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <Button
                  isIconOnly
                  className=" bg-[#F5F5F5]"
                  size="md"
                  radius="sm"
                >
                  <Add size={24} />
                </Button>
              </div>
              <div className="flex flex-col gap-1 w-full overflow-auto h-full px-2">
                <CheckboxGroup
                  color="warning"
                  value={groupSelected}
                  onChange={setGroupSelected}
                  classNames={{
                    base: "w-full",
                  }}
                >
                  <CustomCheckbox
                    value="bc1q6tqs5kvjf5n5....dx0aw"
                    user={{
                      address: "bc1q6tqs5kvjf5n5....dx0aw",
                      amount: "1000",
                    }}
                  />
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div className=" bg-[#F5F5F7] rounded-lg p-4 flex flex-row mt-2 gap-2">
            <div className="w-3/12 leading-[2.2em] px-4 text-sm">
              <h1 className=" text-base">Order details</h1>
              <p className=" flex justify-between">
                <span className=" text-[#AFAFAF]">transactional mode</span>
                <span>-</span>
              </p>
              <p className=" flex justify-between">
                <span className=" text-[#AFAFAF]">Sending Address</span>
                <span>0</span>
              </p>
              <p className=" flex justify-between">
                <span className=" text-[#AFAFAF]">Collection address</span>
                <span>0</span>
              </p>
              <p className=" flex justify-between">
                <span className=" text-[#AFAFAF]">Collection quantity</span>
                <span>0</span>
              </p>
              <p className=" flex justify-between">
                <span className=" text-[#AFAFAF]">Collecting tokens</span>
                <span>-</span>
              </p>
            </div>
            <div className="w-6/12 px-2">
              <h1>Gas setting</h1>
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
                    >
                      <h1
                        className={clsx(
                          "text-2xl",
                          "font-bold",
                          gasTab == 0 ? "text-white" : "text-gray-700"
                        )}
                      >
                        10
                      </h1>
                      <div
                        className={clsx(
                          "text-sm",
                          gasTab == 0 ? "text-white" : "text-gray-400"
                        )}
                      >
                        Slow 🐢
                      </div>
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
                    >
                      <h1
                        className={clsx(
                          "text-2xl",
                          "font-bold",
                          gasTab == 1 ? "text-white" : "text-gray-700"
                        )}
                      >
                        10
                      </h1>
                      <div
                        className={clsx(
                          "text-sm",
                          gasTab == 1 ? "text-white" : "text-gray-400"
                        )}
                      >
                        Normal 🚗
                      </div>
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
                    >
                      <h1
                        className={clsx(
                          "text-2xl",
                          "font-bold",
                          gasTab == 2 ? "text-white" : "text-gray-700"
                        )}
                      >
                        10
                      </h1>
                      <div
                        className={clsx(
                          "text-sm",
                          gasTab == 2 ? "text-white" : "text-gray-400"
                        )}
                      >
                        Fast 🚀
                      </div>
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
                    >
                      <h1
                        className={clsx(
                          "text-2xl",
                          "font-bold",
                          gasTab == 3 ? "text-white" : "text-gray-700"
                        )}
                      >
                        10
                      </h1>
                      <div
                        className={clsx(
                          "text-sm",
                          gasTab == 3 ? "text-white" : "text-gray-400"
                        )}
                      >
                        Fast 🚀
                      </div>
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
                      base: "max-w-md !flex !flex-row !flex-row-reverse whitespace-nowrap items-center  ",
                      track: "border border-none w-full",
                      indicator:
                        "bg-gradient-to-r from-green-100 to-green-500  w-full",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                    value={100}
                    showValueLabel={true}
                    valueLabel={
                      <span className=" text-[#58BF6D] font-bold">10 Mins</span>
                    }
                  />
                </CardBody>
              </Card>
            </div>
            <div className="w-3/12 text-xs">
              <h1 className=" text-base">Total Cost</h1>
              <div className=" w-full p-4 bg-[url('/app/bill_bg.svg')] bg-cover bg-no-repeat  bg-top">
                <div className=" flex justify-between text-gray-800">
                  <span className="">Sats In Inscription</span>
                  <span className=" text-right">
                    <h1>0 sats</h1>
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
            </div>
          </div>
        </div>
        <div className=" w-3/12 m-3 p-4 bg-white rounded-lg shadow-lg">
          <Balance />
          <Gas />
          <Blocks />
        </div>
      </div>
    </>
  );
}

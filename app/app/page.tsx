"use client";
import { useState, useEffect } from "react";
import { Balance } from "@/components/balance";
import { Gas } from "@/components/gas";
import { Blocks } from "@/components/blocks";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { Button, CheckboxGroup, Select, SelectItem, Input, } from "@nextui-org/react";
import {
  Back,
  Order,
  Forward,
  SearchIcon,
  Add,
  Close,
} from "@/components/icons";
import { Codemirror } from "@/components/codemirror";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import { GasModule } from "@/components/gasModule";
import { TotalCost } from "@/components/totalCost";
import { getBTCPrice, getTickBalance, getTickSummary } from "@/api";

interface receiveAddressObj {
  address: string;
  amount: number;
}

export default function AppPage() {
  const [sendAddress, setSendAddress] = useState<string[]>([]);
  const [sendAddressAmount, setSendAddressAmount] = useState(0);
  const [receiveAddress, setReceiveAddress] = useState<string[]>([]);
  const [receiveAddresses, setReceiveAddresses] = useState<receiveAddressObj[]>(
    [
      {
        address:
          "bc1py6vz70urujdedy9warp6djvt5lmx7l6yncfprr63fqrhjejrnapqtn4nhk",
        amount: 1000
      },
    ]
  );
  const [tickSummary, setTickSummary] = useState([]);
  const [gas, setGas] = useState<string>("0")
  const [btcPrice, setBtcPrice] = useState(0);

   const formatAddress = (address:string) => {
     return (
       address.substr(0, 16) + "......" + address.substr(address.length - 16, 16)
     );
   };

  useEffect(() => {
    const interval = setInterval(async () => {
      const btcPrice = await getBTCPrice();
      setBtcPrice(btcPrice.USD);
      console.log(btcPrice);
      console.log("sendAddress.length", sendAddress);
      if (sendAddress.length == 1) {
        const tickSummary = await getTickSummary(sendAddress[0]);
        
        console.log("tickSummary", tickSummary);
        const { detail } = tickSummary;
        setTickSummary(detail);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [sendAddress]);


  return (
    <>
      <div className=" w-16 h-full bg-white shadow-md shadow-gray-200">
        <SidebarWrapper />
      </div>
      <div className=" w-full flex flex-row">
        <div className="w-full m-3 mr-0 p-6 bg-white rounded-lg shadow-lg  flex flex-col">
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
                Let&apos;s do it
              </Button>
            </div>
          </div>
          <div className="flex flex-row h-full">
            <div className="my-2 border-dashed border-1 rounded-2xl flex flex-col w-2/5">
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
                  value={sendAddress}
                  onValueChange={
                    setSendAddress as (value: string[] | undefined) => void
                  }
                  isDisabled
                  classNames={{
                    base: "w-full",
                  }}
                >
                  {sendAddress.map((el, index) => {
                    return (
                      <CustomCheckbox
                        key={index}
                        value={el}
                        user={{
                          address: formatAddress(el),
                          amount: sendAddressAmount,
                        }}
                      />
                    );
                  })}
                </CheckboxGroup>
              </div>
            </div>
            <div className=" w-1/5 flex items-center">
              <div className="flex flex-row w-full px-6 bg-[url(/app/long_arrow.svg)] bg-no-repeat bg-[length:100%_auto] bg-center">
                <div className="w-full border-3 border-black rounded-2xl">
                  <Select
                    items={tickSummary}
                    label="Select BRC20"
                    className="w-full"
                  >
                    {(tick) => (
                      <SelectItem
                        key={tick["ticker"]}
                        textValue={`${tick["ticker"]} - ${tick["overallBalance"]}`}
                      >
                        {tick["ticker"]} - {tick["overallBalance"]}
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </div>
            </div>
            <div className="my-2 border-dashed border-1 rounded-2xl flex flex-col w-2/5">
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
                <div className=" fixed w-[23rem] bg-white z-50 right-3 top-3 bottom-3 rounded-xl shadow-md p-6">
                  <div className="flex text-xl font-bold leading-6 gap-4">
                    <Button
                      isIconOnly
                      className=" bg-[#F5F5F5]"
                      size="md"
                      radius="sm"
                    >
                      <Close size={12} />
                    </Button>
                    <span>Add Wallet Address</span>
                  </div>
                  <Codemirror />
                  <div>
                    <Button
                      isIconOnly
                      className=" bg-[#F5F5F5]"
                      size="md"
                      radius="sm"
                    >
                      <Add size={24} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full overflow-auto h-full px-2">
                <CheckboxGroup
                  color="warning"
                  value={receiveAddress}
                  onValueChange={
                    setReceiveAddress as (value: string[] | undefined) => void
                  }
                  classNames={{
                    base: "w-full",
                  }}
                >
                  {receiveAddresses.map((el, index) => {
                    return (
                      <CustomCheckbox
                        key={index}
                        value={el.address}
                        user={{
                          address: formatAddress(el.address),
                          amount: el.amount,
                        }}
                      />
                    );
                  })}
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div className=" bg-[#F5F5F7] rounded-lg p-4 flex flex-row mt-2 gap-2">
            <div className="w-4/12 leading-[2.2em] px-4 text-sm">
              <h1 className=" text-base font-bold">Order details</h1>
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
            <div className="w-5/12 px-2">
              <GasModule gas={gas} changeGas={setGas} />
            </div>
            <div className="w-3/12 text-xs">
              <TotalCost gas={gas} btcPrice={btcPrice} />
            </div>
          </div>
        </div>
        <div className="w-[30rem] m-3 p-4 bg-white rounded-lg shadow-lg">
          <Balance btcPrice={btcPrice} changeSendAddress={setSendAddress} />
          <Gas />
          <Blocks />
        </div>
      </div>
    </>
  );
}

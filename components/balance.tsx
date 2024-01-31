"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownSection,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { getBTCPrice, getTickBalance } from "@/api";
import { useWalletContext } from "@/context/wallet";
import Decimal from "decimal.js";
import { BTC, Unisat, DISCONNECT, DOT } from "@/components/icons";
import clsx from "clsx";
import { toast } from "react-toastify";

const config: Object = {
  position: "bottom-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  // theme: "dark",
};

export const Balance = () => {
  const iconClasses = "text-xl text-block pointer-events-none flex-shrink-0";
  const { account, setAccount } = useWalletContext();
  const [btcPrice, setBtcPrice] = useState(0);
  const [balance, setBalance] = useState(0);
  const [biisBalance, setBiisBalance] = useState(0);

  const connectUnisatWallet = async () => {
    if (typeof (window as any).unisat == "undefined") {
      toast("❌ UniSat Wallet is not installed!", config);
    } else {
      try {
        let accounts = await (window as any).unisat.requestAccounts();
        console.log("accounts", accounts[0]);
        setAccount({
          unisat: accounts[0],
          okx: "",
        });
        const BiisBalance = await getTickBalance(accounts[0], "biis");
        setBiisBalance(BiisBalance.availableBalance);
        console.log("BiisBalance", BiisBalance);
        toast("🚀 Connect success!", config);
      } catch (e) {
        console.log(e);
        toast("❌ Connect failed", config);
      }
    }
  };

  const connectOKXWallet = async () => {
    if (typeof (window as any).okxwallet == "undefined") {
      toast("❌ OKX Wallet is not installed!", config);
    } else {
      try {
        let accounts = await (window as any).okxwallet.bitcoin.connect();
        setAccount({
          unisat: "",
          okx: accounts["address"],
        });
        const BiisBalance = await getTickBalance(accounts["address"], "biis");
        setBiisBalance(BiisBalance.availableBalance);
        console.log("BiisBalance", BiisBalance);
        toast("🚀 Connect success!", config);
      } catch (e) {
        console.log(e);
        toast("❌ Connect failed", config);
      }
    }
  };

  const formatBTC = (balance: number) => {
    return Decimal.div(balance, 1e8).toString();
  };

  const totalFund = () => {
    console.log(balance);
    return Decimal.div(balance, 1e8).mul(btcPrice).toFixed(2);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const walletAccount = account.unisat != "" ? account.unisat : account.okx;
      const btcPrice = await getBTCPrice();
      setBtcPrice(btcPrice.USD);
      console.log(btcPrice);
      if (walletAccount != "") {
        if (account.unisat != "") {
          const accounts = await (window as any).unisat.requestAccounts();
          setAccount({
            unisat: accounts[0],
            okx: "",
          });
          const balance = await (window as any).unisat.getBalance();
          console.log(balance);
          setBalance(balance.total);
        } else if (account.okx != "") {
          let accounts = await (window as any).okxwallet.bitcoin.connect();
          setAccount({
            unisat: "",
            okx: accounts["address"],
          });
          const balance = await (window as any).okxwallet.bitcoin.getBalance();
          console.log(balance);
          setBalance(balance.total);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [account]);

  return (
    <div
      className={clsx(
        "h-[14rem]",
        "relative",
        "transform-style-3d",
        "duration-300",
        (account.unisat || account.okx) && "transform-rotateY-180"
      )}
    >
      <Card className="shadow-[0_1px_10px_rgba(0,0,0,0.1)] card transform-rotateY-180">
        <CardBody className=" px-4 ">
          <h1 className=" text-gray-400 text-sm flex justify-between">
            <span>Your Balance</span>
            <span>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button startContent={<DOT/>} className=" text-black bg-white border-none p-0 h-4 w-4"></Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Wallet"
                  onAction={(key) => {
                    console.log(key);
                    if (key == "unisat") {
                      connectUnisatWallet();
                    }
                    if (key == "okx") {
                      connectOKXWallet();
                    }
                    if (key == "disconnect") {
                      setAccount({
                        unisat: "",
                        okx: "",
                      });
                    }
                  }}
                >
                  <DropdownSection showDivider>
                    <DropdownItem
                      key="unisat"
                      startContent={
                        <Unisat size={32} className={iconClasses} />
                      }
                    >
                      Unisat
                    </DropdownItem>
                    <DropdownItem
                      key="okx"
                      startContent={
                        <Unisat size={32} className={iconClasses} />
                      }
                    >
                      OKX
                    </DropdownItem>
                  </DropdownSection>
                  <DropdownSection>
                    <DropdownItem
                      key="disconnect"
                      startContent={
                        <DISCONNECT size={32} className={iconClasses} />
                      }
                    >
                      Disconnect
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </span>
          </h1>
          <div className=" text-4xl text-gray-700 font-bold mb-2 whitespace-nowrap">
            {formatBTC(balance)}
            <b className=" text-orange-500 text-xs px-2">BTC</b>
            <span className="text-base text-gray-400 font-normal">
              ≈ ${totalFund()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className=" text-gray-400">$BIIS Balance</span>
            <span className=" text-green-500">{biisBalance} $BIIS</span>
          </div>
          <Card className=" mt-4 rounded-lg shadow-none bg-[#FBF8F8]">
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
      <Card className=" bg-[url('/wallet/wallet_bg.svg')] bg-cover shadow-[0_1px_10px_rgba(0,0,0,0.1)] card cardBack ">
        <CardBody className=" px-4">
          <div className=" flex justify-between items-center py-4">
            <div className=" flex flex-row gap-2 items-center ">
              <span className=" text-[2.5rem]">🍻</span>
              <span>
                <h1 className=" text-base text-gray-400 leading-none">
                  Wellcome
                </h1>
                <h2 className=" text-3xl font-bold leading-none">Hello.</h2>
              </span>
            </div>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button className=" bg-black text-white border-none">
                  Connect Wallet
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Wallet"
                onAction={(key) => {
                  console.log(key);
                  if (key == "unisat") {
                    connectUnisatWallet();
                  }
                  if (key == "okx") {
                    connectOKXWallet();
                  }
                }}
              >
                <DropdownItem
                  key="unisat"
                  startContent={<Unisat size={32} className={iconClasses} />}
                >
                  Unisat
                </DropdownItem>
                <DropdownItem
                  key="okx"
                  startContent={<Unisat size={32} className={iconClasses} />}
                >
                  OKX
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className=" mt-2 mb-1 flex justify-between bg-white py-2 px-4 rounded-lg">
            <span className="text-gray-500 flex flex-row items-center gap-1">
              <BTC size={20} />
              BTC
            </span>
            <span className="text-gray-500">
              42,550 Sats <b className="text-green-500">(+59.11%)</b>
            </span>
          </div>
          <div className=" flex justify-between bg-white py-2 px-4 rounded-lg">
            <span className="text-gray-500 flex flex-row items-center gap-1">
              <BTC size={20} />
              BIIS
            </span>
            <span className="text-gray-500">
              42,550 Sats <b className="text-green-500">(+59.11%)</b>
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

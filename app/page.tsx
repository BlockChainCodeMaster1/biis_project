"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Arrow } from "@/components/icons";

import "swiper/css";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="text-base sm:text-2xl py-2 sm:py-10">Improve your</div>
        <div className=" flex justify-between relative flex-col sm:flex-row">
          <Swiper
            className=" h-16 sm:h-40 text-right"
            direction={"vertical"}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
          >
            <SwiperSlide className=" text-6xl sm:text-9xl bg-clip-text text-transparent  bg-gradient-to-br from-[#E9D854] to-[#EB722E]">
              Energy
            </SwiperSlide>
            <SwiperSlide className="text-6xl  sm:text-9xl bg-clip-text text-transparent  bg-gradient-to-br from-[#E9D854] to-[#EB722E]">
              Power
            </SwiperSlide>
          </Swiper>
          <span className=" ml-4 text-6xl  sm:text-9xl bg-clip-text text-transparent  bg-gradient-to-br from-[#616162] to-[#141414]">
            Consumption
          </span>
          <i className=" bg-[url('/home/icon_circle.svg')] absolute w-24 h-24 sm:w-32 sm:h-32 bg-cover left-1/2 -ml-48 sm:-ml-60 z-10 top-24 sm:top-20 animate-[bounce_10s_ease-in-out_infinite]"></i>
          <i className=" bg-[url('/home/icon_light.svg')] absolute w-24 h-24 sm:w-40 sm:h-40 bg-cover left-1/2 sm:ml-96 ml-20 z-10 top-0 animate-[bounce_6s_ease-in-out_infinite]"></i>
        </div>
        <div className="text-3xl sm:text-5xl py-4 sm:py-10">with BRC-20</div>
        <div className="flex gap-4">
          <Button
            size="lg"
            isExternal
            as={Link}
            className="text-sm font-normal text-white bg-black"
            // href={siteConfig.links.sponsor}
            endContent={<Arrow color="#fff" />}
            variant="flat"
          >
            Coming soon
          </Button>
          <Button
            size="lg"
            isExternal
            as={Link}
            className="text-sm font-normal text-black bg-transparent border-2 border-black"
            href={siteConfig.links.docs}
            endContent={<Arrow color="#000" />}
            variant="flat"
          >
            Document
          </Button>
        </div>
      </section>
      <section className=" flex-col items-center justify-center gap-4 sm:flex hidden">
        <div className="bg-[url('/home/panel.svg')] bg-[100%_auto] bg-no-repeat w-full h-[50rem]"></div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-6 sm:py-14">
        <h1 className="text-[#989EAF]  tracking-widest text-xs sm:text-lg py-1">
          DEVELOPERS AND USERS IN THE BRC
        </h1>
        <h2 className=" text-xl sm:text-5xl font-bold py-0 sm:py-2">
          One-stop technology stack for the
        </h2>
        <h3 className=" text-2xl sm:text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-br from-[#E9C24C] to-[#EB742F] py-0 sm:py-2">
          BRC ecosystem + Money
        </h3>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-0 sm:py-14">
        <Card>
          <CardBody className=" flex sm:flex-row px-4 py-4 sm:px-14 sm:py-10 flex-col-reverse">
            <div className=" w-full sm:w-5/12">
              <h1 className="text-2xl sm:text-5xl py-0 sm:py-3">What is</h1>
              <h2 className="text-2xl sm:text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-br from-[#E9C24C] to-[#EB742F] py-0 sm:py-3">
                Biis BRC ToolsBox.
              </h2>
              <p className="text-[#989EAF] text-xs sm:text-lg py-4 sm:py-8">
                Biis Offers A Comprehensive Set Of Tools, Including Launch,
                Cross-Chain, Batch Distribution, Batch Collection, Signature
                Distribution, And Batch Operations For BRC20/420/721/100, And
                More!
              </p>
              <p className=" py-4">
                <Button
                  size="lg"
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-black bg-transparent border-2 border-black"
                  // href={siteConfig.links.sponsor}
                  endContent={<Arrow color="#000" />}
                  variant="flat"
                >
                  Comming soon
                </Button>
              </p>
            </div>
            <div className=" bg-[url('/home/toolsBox-bg-mobile.png')] sm:bg-[url('/home/toolsBox-bg.svg')] bg-[100%_auto] bg-no-repeat w-full sm:w-7/12 h-60 sm:h-[25rem]"></div>
          </CardBody>
        </Card>
        <div className=" flex flex-col sm:flex-row gap-4 w-full">
          <Card className=" w-full">
            <CardBody className="p-4 sm:p-6 bg-[url(/home/toolsBox-arrow.svg)] bg-no-repeat bg-[length:7rem_auto] sm:bg-[length:10rem_auto] bg-[right_96%] ">
              <div className=" bg-[url('/home/toolsBox-bg2.svg')] bg-no-repeat bg-[100%_auto] w-full h-56 sm:h-[26rem]"></div>
              <h1 className="text-2xl sm:text-5xl py-2 sm:py-5">
                Safeguard Security.
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8 sm:h-60">
                Users Can More Conveniently Participate In The BRC Ecosystem,
                Conducting Transactions, Providing Liquidity, And Other
                Operations Through This Technology Stack.
              </p>
              <p className=" py-4">
                <Button
                  size="lg"
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-black bg-transparent border-2 border-black"
                  // href={siteConfig.links.sponsor}
                  endContent={<Arrow color="#000" />}
                  variant="flat"
                >
                  Comming soon
                </Button>
              </p>
            </CardBody>
          </Card>
          <Card className=" w-full">
            <CardBody className="p-4 sm:p-6 bg-[url(/home/toolsBox-arrow.svg)] bg-no-repeat bg-[length:5rem_auto] sm:bg-[length:10rem_auto] bg-[right_96%] ">
              <div className=" bg-[url('/home/toolsBox-bg3.svg')] bg-no-repeat bg-[100%_auto] w-full h-56 sm:h-[26rem]"></div>

              <h1 className="text-2xl sm:text-5xl py-2 sm:py-5">
                Ultimate convenience.
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8 sm:h-60">
                The Security Of Biis Stems From Its Comprehensive Technical
                Architecture And Close Integration With The Ordinals Protocol.
                The Seamless Integration With The Ordinals Protocol Ensures That
                Users Fully Leverage The Advantages Of The BRC-20 Standard And
                Ordinals Protocol When Using The Toolbox.
              </p>
              <p className=" py-4">
                <Button
                  size="lg"
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-black bg-transparent border-2 border-black"
                  // href={siteConfig.links.sponsor}
                  endContent={<Arrow color="#000" />}
                  variant="flat"
                >
                  Comming soon
                </Button>
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-6 sm:py-14">
        <ul className="flex flex-col sm:flex-row text-center w-full">
          <li className="  w-full sm:py-0 py-2">
            <h1 className="text-[#989EAF]  tracking-widest text-base sm:text-lg py-1">
              ALLOCATION
            </h1>
            <p className="text-3xl sm:text-5xl font-bold py-2">Fair Mint</p>
          </li>
          <li className="  w-full sm:py-0 py-2">
            <h1 className="text-[#989EAF]  tracking-widest text-base sm:text-lg py-1">
              SUPPLY
            </h1>
            <p className="text-3xl sm:text-5xl font-bold py-2">160,000,000</p>
          </li>
          <li className=" w-full sm:py-0 py-2">
            <h1 className="text-[#989EAF]  tracking-widest text-base sm:text-lg py-1">
              PERCENT
            </h1>
            <p className="text-3xl sm:text-5xl font-bold py-2">100%</p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-14 text-center sm:text-left">
        <h1 className="text-[#989EAF]  tracking-widest text-xs sm:text-lg py-1">
          LEARN MORE ABOUT TOOLS AND RESOURCES
        </h1>
        <h2 className=" text-2xl sm:text-5xl font-bold py-0 sm:py-2">
          We are committed to making sure that everyone
        </h2>
        <h3 className=" text-2xl sm:text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-br from-[#E9C24C] to-[#EB742F] py-0 sm:py-2">
          Can easily use this technology stack
        </h3>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-4 sm:py-14 relative">
        <div className=" flex flex-col sm:flex-row gap-4 w-full">
          <Card className=" w-full bg-white bg-[url(/home/cardIcon1.svg)] bg-no-repeat  bg-[length:2.5rem_auto]  sm:bg-[length:4rem_auto] bg-[position:6%_6%]">
            <CardBody className=" p-4 sm:p-10 pt-14 sm:pt-24 ">
              <h1 className=" text-2xl sm:text-4xl py-1 sm:py-3 font-bold">
                Batch distribution and collection tool
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8">
                Enables Users To Process Multiple Transactions At Once,
                Efficiently Distributing Digital Assets To Target Addresses Or
                Performing Batch Collection From Multiple Source Addresses. This
                Simplifies The Management And Liquidity Operations Of
                Large-Scale Digital Assets.
              </p>
            </CardBody>
          </Card>
          <Card className=" w-full bg-white bg-[url(/home/cardIcon2.svg)] bg-no-repeat bg-[length:2rem_auto]  sm:bg-[length:4rem_auto] bg-[position:6%_8%]">
            <CardBody className=" p-4 sm:p-10 pt-14 sm:pt-24 ">
              <h1 className=" text-2xl sm:text-4xl py-1 sm:py-3 font-bold">
                Proxy signature tool.
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8">
                This Tool Allows Proxies To Digitally Sign On Behalf Of
                Delegators Without The Direct Involvement Of The Delegators.
                Such A Design Helps Streamline Complex Signature Processes And
                Enhances The Convenience Of Operations.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className=" flex flex-col sm:flex-row gap-4 w-full">
          <Card className=" w-full bg-white bg-[url(/home/cardIcon3.svg)] bg-no-repeat bg-[length:2.5rem_auto]  sm:bg-[length:4rem_auto] bg-[position:6%_6%]">
            <CardBody className=" p-4 sm:p-10 pt-14 sm:pt-24 ">
              <h1 className=" text-2xl sm:text-4xl py-1 sm:py-3 font-bold">
                Batch multi-signature BTC operation tool
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8">
                This Tool Allows Users To Process Multiple Multi-Signature
                Transactions At Once, Enhancing Efficiency, Reducing Transaction
                Costs, And Offering Users A More Flexible Way Of Operation.
                Users Can Conveniently And Securely Manage And Execute Complex
                Bitcoin Transactions.
              </p>
            </CardBody>
          </Card>
          <Card className=" w-full bg-white bg-[url(/home/cardIcon4.svg)] bg-no-repeat bg-[length:2rem_auto]  sm:bg-[length:4rem_auto] bg-[position:6%_8%]">
            <CardBody className=" p-4 sm:p-10 pt-14 sm:pt-24 ">
              <h1 className=" text-2xl sm:text-4xl py-1 sm:py-3 font-bold">
                Cross-chain tool.
              </h1>
              <p className="text-[#989EAF] text-xs sm:text-lg py-2 sm:py-8">
                These Types Of Tools Typically Provide A Bridging Mechanism,
                Allowing Users To Cross Different Blockchain Platforms, Achieve
                Seamless Transfer Of Assets, And Enhance Interoperability, Thus
                Improving The Liquidity Of Digital Assets.
              </p>
            </CardBody>
          </Card>
        </div>
        <i className=" bg-[url('/home/cardIcon-top-left.svg')] absolute w-20 h-20 bg-cover -left-10 z-10 top-10 animate-[bounce_10s_ease-in-out_infinite]"></i>
        <i className=" bg-[url('/home/cardIcon-bottom-right.svg')] absolute w-24 h-24 bg-cover -right-5 sm:-right-14  z-10 -bottom-20 sm:bottom-0 animate-[bounce_6s_ease-in-out_infinite]"></i>
      </section>
      <section className="flex flex-col sm:flex-row items-center gap-4 py-14 relative bg-[url('/home/round-line-bg.svg')] bg-no-repeat bg-left justify-between">
        <div className=" w-full sm:w-2/5"></div>
        <div className=" w-full sm:w-3/5">
          <div className="pb-10">
            <h1 className="text-[#989EAF]  tracking-widest text-xs sm:text-lg py-1">
              DEVELOPERS AND USERS IN THE BRC
            </h1>
             <h2 className=" text-2xl sm:text-5xl font-bold py-0 sm:py-2">
              Chrome offers more features
            </h2>
            <h3 className=" text-2xl sm:text-5xl font-bold bg-clip-text text-transparent  bg-gradient-to-br from-[#E9C24C] to-[#EB742F] py-0 sm:py-2">
              Learn more about how to buy $BIIS
            </h3>
          </div>
          <div className="flex flex-row gap-4  ">
            <Card className=" w-full border-[#EA970F] border">
              <CardBody className="p-4 sm:p-10 sm:pt-36 pt-20 bg-white bg-[url(/home/uniSatWalletIcon.svg)] bg-no-repeat bg-[length:3rem_auto] sm:bg-[length:14rem_auto] bg-[position:8%_8%] sm:bg-[position:10%_10%]">
                <h1 className=" text-xl sm:text-4xl font-bold">UniSat Wallet</h1>
                <p className="text-[#989EAF] text-base sm:text-lg py-2">
                  Buy $Biis for UniSat Wallet
                </p>
                <i className=" bg-[url('/home/arrow-right-top-yellow.svg')] absolute w-3 h-3 sm:w-6 sm:h-6 bg-cover right-6 sm:right-10 z-10 top-6 sm:top-10"></i>
              </CardBody>
            </Card>
            <Card className=" w-full border-[#000] border">
              <CardBody className="p-4 sm:p-10  sm:pt-36 pt-20 bg-white  bg-[url(/home/okxWalletIcon.svg)] bg-no-repeat bg-[length:3rem_auto] sm:bg-[length:14rem_auto] bg-[position:8%_8%] sm:bg-[position:10%_10%]">
                <h1 className=" text-2xl sm:text-4xl font-bold">OKX Wallet</h1>
                <p className="text-[#989EAF] text-base sm:text-lg py-2">
                  Buy $Biis for OKX Wallet
                </p>
                <i className=" bg-[url(/home/arrow-right-top-black.svg)] absolute w-3 h-3 sm:w-6 sm:h-6 bg-cover right-6 sm:right-10 z-10 top-6 sm:top-10"></i>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 my-2 sm:my-10 ">
        <Card className=" w-full p-0 h-[24rem] sm:h-[41rem] relative">
          <CardBody className="py-4 sm:p-0 relative overflow-hidden">
            <div className=" absolute z-10 flex justify-center items-center flex-col w-full h-full">
              <h1>
                <span className="text-3xl sm:text-8xl bg-clip-text text-transparent  bg-gradient-to-br from-[#E9C24C] to-[#EB742F] py-2">
                  Get Started
                </span>
                <span className="text-3xl sm:text-8xl bg-clip-text text-transparent  bg-gradient-to-br from-[#FAFAFB] to-[#888893] py-2">
                  {" "}
                  with Biis
                </span>
              </h1>
              <p className="text-[#989EAF]  tracking-widest text-xs sm:text-lg text-left py-8 sm:py-14">
                Open An Account In Minutes - No Credit Check And No Minimum
                Deposit.
              </p>
              <p className="flex gap-4">
                <Button
                  size="lg"
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-black bg-white"
                  // href={siteConfig.links.sponsor}
                  endContent={<Arrow color="#000" />}
                  variant="flat"
                >
                  Coming soon
                </Button>
                <Button
                  size="lg"
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-white bg-transparent border-2 border-white"
                  // href={siteConfig.links.sponsor}
                  endContent={<Arrow color="#fff" />}
                  variant="flat"
                >
                  Document
                </Button>
              </p>
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute left-0 top-0 right-0 bottom-0 object-cover h-full"
            >
               <source src="/home/cta-bg.mp4" type="video/mp4" />
            </video>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

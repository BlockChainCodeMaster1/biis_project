"use client";

import { useState } from "react";
import { Card, CardBody, CardFooter, Image, Divider } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import 'swiper/css';

export const Blocks = () => {
  const list = [
    {
      title: "Orange",
      confirmed : false,
      img: "/app/fruit-1.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      confirmed : false,
      img: "/app/fruit-1.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      confirmed : 81423,
      img: "/app/fruit-1.jpg",
      price: "$10.00",
    }
  ];

  return (
    <div className="mt-4">
      <h1 className=" text-gray-800 text-lg font-bold">Blocks</h1>
      <Swiper
        slidesPerView={3}
      >
        {list.map((item, index) => (
        <SwiperSlide className="w-full px-1 py-2 "  key={index}>
            <Card  className="w-full rounded-none shadow-none" shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
                <CardBody className={clsx(
                    "overflow-visible", "p-2", "text-center", "text-[10px]", "text-white", "whitespace-nowrap", "rounded-lg" ,
                    !item.confirmed ? ' bg-gradient-to-b from-[#d66c03] to-[#d64d03]' :  ' bg-gradient-to-b from-[#9339f4] to-[#105fb0]'
                )}>
                    <h1>~65 sat/vB</h1>
                    <h2>60 - 627 sat/vB</h2>
                    <h3>1.67 MB</h3>
                    <h4>4519个交易</h4>
                    <p>10分钟之内</p>
                </CardBody>
                 <CardFooter className={clsx("text-xs", "justify-center", "p-1", " font-bold" , !item.confirmed ? "text-[#d64d03]" : " text-[#1d5db4]" )}>
                    {!item.confirmed ? "Unconfirmed" : item.confirmed }
                </CardFooter>
            </Card>
         </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

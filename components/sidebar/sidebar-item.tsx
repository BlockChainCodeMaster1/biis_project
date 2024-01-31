import NextLink from "next/link";
import React from "react";
import clsx from "clsx";
import { Tooltip } from "@nextui-org/react";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {

  return (
    <NextLink
      href={href}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={clsx(
          isActive
            ? "bg-primary-100 [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100",
          "flex w-full min-h-[44px] h-full items-center justify-center rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        // onClick={handleClick}
      >
        <Tooltip
          showArrow
          content={"Batch Transfer"}
          classNames={{
            base: [
              // arrow color
              "before:bg-white dark:before:bg-white",
            ],
            content: ["boder-none shadow-[0_1px_10px_rgba(0,0,0,0.1)]"],
          }}
          placement="right"
        >
          <div className="max-w-fit">{icon}</div>
        </Tooltip>
        <span className="text-default-900">{title}</span>
      </div>
    </NextLink>
  );
};

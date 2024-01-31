import React from "react";
import {Checkbox, Link, User, Chip, cn} from "@nextui-org/react";

export const CustomCheckbox = ({ user, value }) => {
  return (
    <Checkbox
      aria-label={user.address}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent",
          "data-[selected=true]:border-[#f79a27]"
        ),
        label: "w-full text-xs whitespace-nowrap",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        <div>{user.address}</div>
        <div className="flex flex-col items-end gap-1">{user.amount}</div>
      </div>
    </Checkbox>
  );
};

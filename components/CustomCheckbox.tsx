import { useState } from "react";
import { Checkbox, Input, cn } from "@nextui-org/react";

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
      <div className="w-full flex justify-between items-center">
        <div>{user.address}</div>
        <Input
          classNames={{
            // label: "text-black/50 dark:text-white/90",
            base: ["w-28"],
            input: [
              // "bg-transparent",
              // "hover:bg-transparent",
              "text-right",
              // "text-sm",
            ],
            inputWrapper: [
              // "shadow-none",
              // "hover:shadow-none",
              // "bg-transparent",
              // "backdrop-none",
              // "hover:bg-none",
              // "group-data-[focus=true]:bg-transparent",
              // "group-data-[hover=true]:bg-transparent",
            ],
          }}
          size="sm"
          type="number"
          label=""
          labelPlacement="outside"
          value={user.amount}
        />
      </div>
    </Checkbox>
  );
};

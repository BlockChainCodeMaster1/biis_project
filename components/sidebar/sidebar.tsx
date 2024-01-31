"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip, Divider } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { LogoMin, BTC, TwitterIcon } from "@/components/icons";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} /> //onClick={setCollapsed}
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {/* <CompaniesDropdown /> */}
          <NextLink href="/">
            <BTC size={40} />
          </NextLink>
        </div>
        <div className="flex flex-col justify-between h-full pt-2">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title=""
              icon={<BTC size={40} />}
              isActive={pathname === "/app"}
              href="/app"
            />
            {/* <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Accounts"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />
            </SidebarMenu> */}
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <TwitterIcon />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};

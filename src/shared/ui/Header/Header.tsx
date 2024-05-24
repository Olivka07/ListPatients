"use client";

import { classNames } from "@/utils/helpers/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./header.module.scss";

type LinkType = {
  name: string;
  href: string;
};
const links: LinkType[] = [
  { href: "/", name: "Главная" },
  { href: "/patients", name: "Пациенты" }
];

export const Header = () => {
  const path = usePathname();
  return (
    <header className={classNames(classes.header__container)}>
      {links.map((link) => (
        <Link
          className={classNames("", { [classes.active]: path === link.href })}
          key={link.href}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </header>
  );
};

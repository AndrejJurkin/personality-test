import React from "react";
import Button from "../Button/Button";
import navLinks from "../../resources/navLinks";
import clsx from "clsx";
import Link from "next/link";

export default function Nav({ dark, showDivider, offsetTop }) {
  return (
    <>
      <nav
        className={clsx(
          dark && "dark",
          showDivider && "border-b border-gray-200",
          "absolute top-0 left-0 z-10 h-20 w-full px-4 text-white md:px-12 lg:px-24"
        )}
      >
        <div
          className={clsx(
            "mx-auto flex h-full max-w-5xl flex-row items-center justify-between",
            "dark:text-slate-800"
          )}
        >
          <Link href="/" data-testid="app-logo">
            <a className="font-display text-xl">Quiso</a>
          </Link>
          <ul className="flex hidden flex-row gap-12 text-sm md:flex">
            {navLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
          <Link href="/test" passHref>
            <a>
              <Button primary>Take the Test</Button>
            </a>
          </Link>
        </div>
      </nav>
      {offsetTop && <div className="h-24" />}
    </>
  );
}

import React from "react";
import Button from "../Button/Button";
import clsx from "clsx";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className={clsx(
        "section-padding hero--clipped mb-16 h-[75vh] text-white",
        "grid place-items-center",
        "bg-gradient-to-b from-slate-800 to-slate-600"
      )}
    >
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 font-display text-2xl md:text-3xl xl:text-4xl">
          &rdquo;It&apos;s so incredible to finally be understood.&rdquo;
        </h1>
        <p className="mb-8 md:text-xl">
          Take our Personality Test and get an accurate description of who you
          are and why you do things the way you do.
        </p>
        <Link href="/test" passHref>
          <a>
            <Button primary size="large">
              Take the Test
            </Button>
          </a>
        </Link>
      </div>
    </section>
  );
}

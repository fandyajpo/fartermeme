import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import { Card } from "./components/card";
const navigation = [
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-lime-900 via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />

      <div className="relative w-24 h-24 border rounded overflow-hidden border-white animate-fade-in">
        <Image src={"/og.png"} alt="og" fill />
      </div>
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        farter
      </h1>

      <p className="text-white md:text-xl text-xs w-5/6 text-center">
        Farter is a cheeky meme coin causing a stink on the BTC Blockchain
      </p>

      <div className="h-12" />
      <div className="animate-fade-in">
        <Card>
          <div className="flex items-center justify-center w-full h-full">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://odin.fun/"
              className="text-xl duration-500 animate-fade-in w-fit bg-black font-semibold text-yellow-500 px-4 py-2 rounded hover:text-zinc-300"
            >
              Buy Now
            </Link>
          </div>
        </Card>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Grab this coin now on{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://odin.fun/"
            className="underline duration-500 hover:text-zinc-300"
          >
            odin.fun
          </Link>{" "}
          and join the adventure!
        </h2>
      </div>
    </div>
  );
}

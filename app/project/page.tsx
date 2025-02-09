import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Project
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <Card>
          <video
            src="/im-fart.mp4"
            className="w-full h-fit"
            autoPlay
            loop
            muted
            playsInline
          />
        </Card>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <div className="w-full h-80">
              <Image
                src={"/president.png"}
                alt="president"
                className="w-full object-cover  h-full"
                fill
              />
            </div>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Fart and Furious</div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {"Meme Coin"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {
                    "Farter memecoin brings trust and transparency back to crypto, making everything simpler. No complex tokens or empty promises. Built on the secure and fast BTC blockchain, Farter provides seamless transactions, always prioritizing the community."
                  }
                </p>
              </article>
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Fart and Furious</div>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {"Stinky Fart"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {`I am Farter—a stinky fart on a mission to create the next big coin meme on Odin.fun! My goal? To turn Farter into a global meme sensation—a hilariously iconic brand that everyone knows (and can't stop laughing about). We're bringing FART, jokes, and memes to the masses—not just for crypto enthusiasts, but for the entire world.
Prepare for the Farter Invasion—the world won’t know what hit it!`}
                </p>
              </article>
            </Card>
          </div>
          <Card>
            <div className="w-full h-80">
              <Image
                src={"/fart-hunter.png"}
                alt="fart-hunter"
                className="w-full object-cover  h-full"
                fill
              />
            </div>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <div className="w-full h-80">
              <Image
                src={"/rofart.png"}
                alt="rofart"
                className="w-full object-cover  h-full"
                fill
              />
            </div>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Fart and Furious</div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {"Unlocking Decentralized Dreams"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {
                    "Join us as we unlock the magic of decentralized dreams and dive into the captivating world of a blockchain built for a fully immersive experience!"
                  }
                </p>
              </article>
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}

"use client";

import { Saira } from "next/font/google";
import PNavbar from "./_components/PNavbar";
import { cn } from "@/lib/utils";
import { HTMLProps, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeaderCard from "./_components/LeaderCard";
import Marquee from "react-fast-marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const saira = Saira({ subsets: ["latin"], weight: "600" });

const data = [
  {
    name: "rotten.cheese",
    avatarSrc: "/silly-goose-1.png",
  },
  {
    name: "rotten.cheese",
    avatarSrc: "/silly-goose-1.png",
  },
  {
    name: "rotten.cheese",
    avatarSrc: "/silly-goose-1.png",
  },
  {
    name: "rotten.cheese",
    avatarSrc: "/silly-goose-1.png",
  },
  {
    name: "rotten.cheese",
    avatarSrc: "/silly-goose-1.png",
  },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3E3A53] to-davy pt-32 pb-12">
      <PNavbar />

      <h1
        className={cn(
          "bg-gradient-to-bl from-lightPurple to-purple bg-clip-text text-5xl font-bold text-center text-transparent my-8 px-8",
          saira.className
        )}
      >
        The Honourable Silly Geese
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full max-w-7xl mx-auto px-8">
        <LeaderCard
          name="rotten.cheese"
          rank={2}
          message="What is a mouse?"
          avatarSrc="/silly-goose-1.png"
        />
        <LeaderCard
          name="rotten.cheese"
          rank={1}
          message="What is a mouse?"
          avatarSrc="/silly-goose-1.png"
          className="relative md:-top-20"
        />
        <LeaderCard
          name="rotten.cheese"
          rank={3}
          message="What is a mouse?"
          avatarSrc="/silly-goose-1.png"
        />
      </div>

      {/* <NotEnoughDataBox /> */}
      <Marquee
        autoFill
        gradient={true}
        gradientColor="#212029"
        gradientWidth={100}
        speed={20}
        className="w-full mt-20"
      >
        {data.map((ele, ind) => {
          return (
            <MiniCard key={ind} name={ele.name} avatarSrc={ele.avatarSrc} />
          );
        })}
      </Marquee>
      <Marquee
        autoFill
        gradient={true}
        gradientColor="#212029"
        gradientWidth={100}
        speed={30}
        className="w-full mt-8"
      >
        {data.map((ele, ind) => {
          return (
            <MiniCard key={ind} name={ele.name} avatarSrc={ele.avatarSrc} />
          );
        })}
      </Marquee>
      <Marquee
        autoFill
        gradient={true}
        gradientColor="#212029"
        gradientWidth={100}
        speed={15}
        className="w-full mt-8"
      >
        {data.map((ele, ind) => {
          return (
            <MiniCard key={ind} name={ele.name} avatarSrc={ele.avatarSrc} />
          );
        })}
      </Marquee>
    </div>
  );
}

export function MiniCard({
  avatarSrc,
  name,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { avatarSrc: string; name: string }) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-4 bg-gradient-to-br text-tingPurple from-purple to-lightPurple rounded-r-lg rounded-b-lg p-2 px-4 mx-8",
        className
      )}
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback className="rounded">RC</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-lg">{name}</p>
    </div>
  );
}

export function NotEnoughDataBox() {
  return (
    <div className="w-fit aspect-video flex flex-col gap-6 items-center justify-center mx-auto p-8 mt-40">
      <RiArchiveStackFill className="w-12 h-12 text-lightPurple" />
      <p className="text-lightPurple text-lg text-center">
        Not enough data yet. Come back later.
      </p>
      <Dialog>
        <DialogTrigger>
          <Button className="rounded-full">
            I want to be your first silly geese
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-tingPurple">
          <p>
            I&apos;m sorry, but this feature is not available yet. Please come
            back later.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function RiArchiveStackFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z"
      ></path>
    </svg>
  );
}

import { Button } from "@/components/ui/button";
import { MaterialSymbolsLogoDev } from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Saira } from "next/font/google";
import { cn } from "@/lib/utils";
import { HTMLProps, SVGProps } from "react";
import Link from "next/link";

const saira = Saira({ subsets: ["latin"], weight: "600" });

export default function HeroSection() {
  return (
    <div className="min-h-screen h-fit flex flex-col items-center justify-end gap-6 px-8 md:px-16 border-b-2 border-border pt-24">
      <div className="my-auto w-full px-8">
        {/* Container */}
        <div className="relative border-x-2 border-white w-full mx-auto max-w-xl flex flex-col items-center text-center py-8">
          {/* Graphics */}
          <BlurCircle className="absolute h-20 w-20 bottom-1/2 right-full translate-x-1/4" />
          <BlurCircle className="absolute h-20 w-20 top-1/2 left-full -translate-x-1/4" />
          <BlurCircle className="absolute h-20 w-20 top-0 left-full -translate-x-1/4" />

          {/* Heading and text */}
          <div className="border-y-2 border-border w-[110%] p-4">
            <h2 className={cn(saira.className, "leading-7")}>
              The place to ask your questions <br /> for your{" "}
              <Image
                src={"/hs.png"}
                alt="headstarter logo"
                className="h-8 w-8 inline"
                width={32}
                height={32}
              />{" "}
              journey
            </h2>
            <p className="text-xl mt-4 max-w-sm mx-auto">
              Consolidate all your questions and ask the babysitter before you
              give the experts a headache
            </p>

            <Link href={"/sign-in"}>
              <Button className="font-bold rounded-full mt-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* CTA */}
          <div className="border-b-2 border-border w-[110%] px-12 py-4 flex items-center flex-wrap justify-center gap-4">
            <Button
              variant={"label"}
              className="rounded-full h-fit py-3 cursor-default"
              size={"lg"}
            >
              <IcSharpContactSupport className="h-8 w-8 text-white mr-2" /> Ask
              Silly Questions
            </Button>
            <Button
              variant={"label"}
              className="rounded-full h-fit py-3 cursor-default"
              size={"lg"}
            >
              <StreamlineInterfacePageControllerLoadingHalfProgressLoadingLoadHalfWaitWaiting className="h-8 w-8 text-white mr-2" />{" "}
              Don&apos;t wait for anyone
            </Button>
            <Button
              variant={"label"}
              className="rounded-full h-fit py-3 cursor-default"
              size={"lg"}
            >
              <RiTriangleFill className="h-8 w-8 text-white mr-2" /> Be
              independent
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
      <FloorSection />
    </div>
  );
}

export function FloorSection() {
  return (
    <div className="w-full max-w-7xl h-80 border-x-2 border-t-2 border-border rounded-t-2xl px-2 pt-2">
      <div className="w-full max-w-7xl h-full border-x-2 border-t-2 border-border rounded-t-xl p-2 px-8 md:px-16 xl:px-24 overflow-y-hidden">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          <Button variant={"ghost"} className="py-2 h-fit px-0">
            <MaterialSymbolsLogoDev className="w-12 h-12" />
            Logo
          </Button>

          <Button className="font-bold">Log Out</Button>
        </div>

        <h3 className={cn(saira.className, "mt-4")}>
          Questions from fellow silly geese
        </h3>
        <div className="w-full flex flex-wrap gap-4 justify-between items-center mt-8">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col justify-start gap-4 bg-tingPurple rounded-2xl p-4 h-60">
            <div className="flex items-start justify-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/silly-goose-1.png"></AvatarImage>
                <AvatarFallback className="rounded">RC</AvatarFallback>
              </Avatar>
              {/*  */}
              <p className="text-lg pt-2.5">Silly Goose: How to open VSCode?</p>
            </div>
            <div className="flex items-start justify-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/ai.png" className="invert"></AvatarImage>
                <AvatarFallback className="rounded">BS</AvatarFallback>
              </Avatar>
              {/*  */}
              <p className="text-lg pt-2.5">
                Open the Terminal, type `code .` to open VSCode. Alternatively,
                go the directory where you have your current project you want to
                open. OpenTerminal in that directory and type: code .
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 flex flex-col justify-start gap-4 bg-tingPurple rounded-2xl p-4 h-60">
            <div className="flex items-start justify-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/silly-goose-2.png"></AvatarImage>
                <AvatarFallback className="rounded">RC</AvatarFallback>
              </Avatar>
              {/*  */}
              <p className="text-lg pt-2.5">
                Silly Goose: How to do hole in one in Putt Party?
              </p>
            </div>
            <div className="flex items-start justify-start gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/ai.png" className="invert"></AvatarImage>
                <AvatarFallback className="rounded">BS</AvatarFallback>
              </Avatar>
              {/*  */}
              <p className="text-lg pt-2.5">Git Gud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IcSharpContactSupport(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5"
      ></path>
    </svg>
  );
}

export function StreamlineInterfacePageControllerLoadingHalfProgressLoadingLoadHalfWaitWaiting(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"></path>
        <path
          strokeDasharray=".889 1.778"
          d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"
        ></path>
        <path d="m9.53 13l-.47.18"></path>
      </g>
    </svg>
  );
}

export function RiTriangleFill(props: SVGProps<SVGSVGElement>) {
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
        d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0"
      ></path>
    </svg>
  );
}

export function BlurCircle(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "h-40 w-40 border border-white backdrop-blur-sm rounded-full flex items-center justify-center",
        props.className
      )}
    ></div>
  );
}

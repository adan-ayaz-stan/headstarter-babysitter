import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { HTMLProps, SVGProps } from "react";

type Props = {
  rank: number;
  name: string;
  message: string;
  avatarSrc: string;
};

export default function LeaderCard({
  rank,
  name,
  message,
  avatarSrc,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & Props) {
  return (
    <div
      {...props}
      className={cn(
        "w-full h-full max-w-80 flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-[#3E3A53] mt-20",
        className
      )}
    >
      <div className="w-full flex items-center justify-between text-lightPurple ">
        <HeroiconsSparklesSolid className="w-6 h-6" />
        <p className="text-lg font-bold">Lumber {rank}</p>
        <HeroiconsSparklesSolid className="w-6 h-6" />
      </div>
      {/*  */}
      <Avatar className="h-16 w-16">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback className="rounded">RC</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-lg">{name}</p>
      <p className="font-semibold text-lg">for</p>
      <p className=" bg-gradient-to-tr from-lightPurple to-purple text-tingPurple font-semibold text-lg w-full p-2 rounded-lg text-center">
        {message}
      </p>
    </div>
  );
}

export function HeroiconsSparklesSolid(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

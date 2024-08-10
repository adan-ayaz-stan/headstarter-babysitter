import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Saira } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const saira = Saira({ subsets: ["latin"], weight: "600" });

const skillsCol1 = [
  <Image
    key={"js-skill"}
    src={"/VscodeIconsFileTypeJsOfficial.svg"}
    alt="Js Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"html-skill"}
    src={"/DeviconHtml5.svg"}
    alt="HTML Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"python-skill"}
    src={"/LogosPython.svg"}
    alt="Python Icon"
    height={150}
    width={150}
  />,
];

const skillsCol2 = [
  <Image
    key={"ts-skill"}
    src={"/LogosTypescriptIcon.svg"}
    alt="Typescript Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"css-skill"}
    src={"/DeviconCss3.svg"}
    alt="HTML Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"stripe-skill"}
    src={"/LogosStripe.svg"}
    alt="Stripe Icon"
    height={150}
    width={150}
  />,
];

const skillsCol3 = [
  <Image
    key={"react-skill"}
    src={"/LogosReact.svg"}
    alt="React Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"next-skill"}
    src={"/SkillIconsNextjsDark.svg"}
    alt="Next Icon"
    height={150}
    width={150}
  />,
  <Image
    key={"stripe-skill"}
    src={"/LogosStripe.svg"}
    alt="Stripe Icon"
    height={150}
    width={150}
  />,
];

export default function SecondSection() {
  return (
    <div className="min-h-screen flex flex-row gap-4">
      {/* Text Content */}
      <div className="md:h-screen relative z-30 w-full max-w-2xl flex flex-col items-center justify-center gap-4 text-center px-8 bg-davy/70 backdrop-blur-sm">
        <h1 className={cn(saira.className, "leading-7 lg:text-5xl")}>
          Make the best of your time
        </h1>
        <p className="text-xl">
          Why wander here and there trying to make sense of everything by
          <strong> yourself</strong>? <br />
          <br /> Why won&apos;t you make the best use of resources available and
          <strong> stop trying to be a smartass</strong>?
        </p>

        <Link href={"/sign-in"}>
          <Button className="font-bold rounded-full mt-4">
            Start using the Headstarter Babysitter!
          </Button>
        </Link>
      </div>

      {/* Skill Graphics */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full md:left-0 md:-translate-x-0 md:relative flex-1 grid grid-cols-3 gap-2 overflow-hidden max-h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-davy via-transparent to-davy z-20" />

        {/* Col 1 */}
        <div className="flex flex-col gap-2 relative -top-24">
          {skillsCol1.map((skill) => (
            <div
              key={skill.key}
              className="py-12 px-6 flex items-center justify-center h-96 bg-tingPurple rounded-2xl"
            >
              {skill}
            </div>
          ))}
        </div>
        {/* Col 2 */}
        <div className="flex flex-col gap-2">
          {skillsCol2.map((skill) => (
            <div
              key={skill.key}
              className="py-12 px-6 flex items-center justify-center h-96 bg-tingPurple rounded-2xl relative -top-12"
            >
              {skill}
            </div>
          ))}
        </div>
        {/* Col 3 */}
        <div className="flex flex-col gap-2 relative -top-28">
          {skillsCol3.map((skill) => (
            <div
              key={skill.key}
              className="py-12 px-6 flex items-center justify-center h-96 bg-tingPurple rounded-2xl relative -top-12"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

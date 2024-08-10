import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { createElement, HTMLProps, useState } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { type Message } from "ai/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createResource } from "@/lib/actions/resources";

type MessageProps = HTMLProps<HTMLDivElement> & {
  role: Message["role"];
  message: string;
  toolInvocations?: any[];
};

export default function Message({
  role,
  message,
  className,
  toolInvocations,
  ...props
}: MessageProps) {
  const [feedbackComplete, setFeedbackComplete] = useState(false);

  if (message.length <= 0) {
    return null;
  }

  async function submitFeedback(rate: "good" | "bad" | "okay") {
    setFeedbackComplete(true);

    await createResource({
      content: `AI Response: ${message}
      User's feedback: The AI response was ${rate}.
      `,
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        {...props}
        className={cn(
          "w-full max-w-xl flex flex-row gap-4 bg-purple rounded-bl-xl rounded-tr-xl p-4",
          role == "user" &&
            "ml-auto rounded-br-xl rounded-tl-xl rounded-bl-none rounded-tr-none bg-lightPurple",
          className
        )}
      >
        <Avatar>
          <AvatarImage></AvatarImage>
          <AvatarFallback>{role === "user" ? "U" : "AI"}</AvatarFallback>
        </Avatar>
        {/*  */}
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[
            rehypeKatex,
            rehypeRaw,
            [rehypeReact, { createElement: createElement }],
          ]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <div className="flex flex-col bg-davy rounded-xl">
                  <div className="text-sm text-davy px-4 py-2 bg-lightPurple rounded-t-md">
                    {match[1]}
                  </div>
                  {/* @ts-ignore */}
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={atomDark}
                    codeTagProps={{ className: "text-sm" }}
                  />
                </div>
              ) : (
                <pre className="p-2 px-4 bg-davy w-full rounded-lg">
                  <code {...rest} className={cn("text-sm", className)}>
                    {children}
                  </code>
                </pre>
              );
            },
            ul(props) {
              return (
                <ul
                  className="list-outside list-disc py-2 md:ml-3 space-y-2"
                  {...props}
                />
              );
            },
            ol(props) {
              return (
                <ol
                  className="list-outside list-decimal py-2 md:ml-3 space-y-2"
                  {...props}
                />
              );
            },
            li(props) {
              return (
                <li className="pl-2 md:border-l-2 border-davy" {...props} />
              );
            },
          }}
          className={cn("text-lg flex-1", role == "user" && "text-black")}
        >
          {message}
        </Markdown>
      </div>

      {/* Feedback mechanism */}
      {!feedbackComplete && role == "assistant" && (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-fit bg-purple hover:bg-purple/70 rounded-md px-2 py-1 transition duration-300">
            Give Feedback
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-1">
            <DropdownMenuItem
              onClick={() => {
                submitFeedback("bad");
              }}
              className="bg-lightPurple hover:bg-purple font-bold text-black cursor-pointer"
            >
              Bad
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                submitFeedback("okay");
              }}
              className="bg-lightPurple hover:bg-purple font-bold text-black cursor-pointer"
            >
              Okay
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                submitFeedback("good");
              }}
              className="bg-lightPurple hover:bg-purple font-bold text-black cursor-pointer"
            >
              Good
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {/*  */}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectMediumCard({
  title,
  href,
  dates,
  video,
  tags,
  link,
  image,
  links,
  className,
  description,
}: Props) {
  return (
    <Card
      className={
        "flex sm:flex-row flex-col justify-between overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <div className="order-2 sm:order-1">
        <CardHeader className="px-2">
          <div className="pt-2 flex gap-3 items-center justify-start">
            <Link
              target="_blanc"
              href={href || "#"}
              className={cn(
                "sm:block cursor-pointer border  rounded-full bg-muted-background dark:bg-foreground hidden",
                className
              )}
            >
              {image && (
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="md:h-11 h-8 w-full overflow-hidden object-cover object-top  rounded-full"
                />
              )}
            </Link>
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-1 sm:px-2">
          <div className="px-1">
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <Markdown className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row items-start gap-1">
              {links?.map((link, idx) => (
                <Link
                  className="shadow-md"
                  href={link?.href}
                  key={idx}
                  target="_blank"
                >
                  <Badge
                    key={idx}
                    className="flex gap-2 px-2 py-1 text-[10px] text-violet-500"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
      <Link
        target="_blanc"
        href={href || "#"}
        className={cn(
          "block cursor-pointer order-1  sm:order-2 sm:w-[50%] w-full",
          className
        )}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none max-h-30 object-cover object-top" // needed because random black line at bottom of video
          />
        )}
      </Link>
    </Card>
  );
}

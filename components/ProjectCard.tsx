import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <Card className="py-0 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-t-md object-cover w-full"
      />
      <CardContent className="space-y-2 p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        <a
          href={github}
          className="text-blue-600 hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
        <a href={link} target="_blank">
          <Button variant="default" className="cursor-pointer block my-4">View Project</Button>
        </a>
      </CardContent>
    </Card>
  );
}
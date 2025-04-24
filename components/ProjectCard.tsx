import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  github,
}: ProjectCardProps) => {
  return (
    <Card>
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-t-md object-cover"
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
      </CardContent>
    </Card>
  );

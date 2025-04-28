import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="p-4 space-y-6 container mx-auto h-screen my-12">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p className="text-muted-foreground">
        A collection of projects I've built using React, Next.js, and TailwindCSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

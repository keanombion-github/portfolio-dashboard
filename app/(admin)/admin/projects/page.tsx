'use client';

import { useState } from "react";
import { projects as defaultProjects, Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { ProjectCard } from "@/components/ProjectCard";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [open, setOpen] = useState(false);

  const addProject = (project: Project) => {
    setProjects([...projects, { ...project, id: projects.length + 1 }]);
    setOpen(false);
  };

  return (
    <div className="p-4 space-y-4 container mx-auto">
      <h1 className="text-2xl font-bold">Admin – Projects</h1>
      <Button onClick={() => setOpen(true)}>+ Add New Project</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <ProjectForm open={open} setOpen={setOpen} onSubmit={addProject} />
    </div>
  );
}

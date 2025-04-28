"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (project: Project) => void;
};

export function ProjectForm({ open, setOpen, onSubmit }: Props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    github: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.description || !form.image || !form.link || !form.github) {
      alert("All fields are required.");
      return;
    }
    onSubmit({ ...form, id: 0 }); // ID will be set in parent
    setForm({ title: "", description: "", image: "", link: "", github: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input name="title" value={form.title} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" value={form.description} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input name="image" value={form.image} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="image">Link URL</Label>
            <Input name="image" value={form.link} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="github">GitHub Link</Label>
            <Input name="github" value={form.github} onChange={handleChange} />
          </div>
          <Button className="w-full" onClick={handleSubmit}>Add Project</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

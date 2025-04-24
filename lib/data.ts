export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
  };
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "A personal site built with Next.js and TailwindCSS.",
      image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      github: "https://github.com/yourusername/portfolio",
    },
  ];
  
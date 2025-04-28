import PortfolioImg1 from '@/assets/images/Portfolio1.jpg'

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
  };
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "A personal site built with Next.js and TailwindCSS.",
      image: PortfolioImg1.src,
      link: 'https://react-portfolio-480d8.web.app/',
      github: "https://github.com/keanombion-github/react-project",
    },
  ];
  

  export const TechSkills = 
    [
        {
          id: 1,
          iconLight: `<i class="devicon-html5-plain-wordmark colored"></i>`,
          iconDark: `<i class="devicon-html5-plain-wordmark"></i>`,
          name: 'HTML'
      },
      {
          id: 2,
          iconLight: `<i class="devicon-css3-plain-wordmark colored"></i>`,
          iconDark: `<i class="devicon-css3-plain-wordmark"></i>`,
          name: 'CSS'
      },
      {
          id: 3,
          iconLight: `<i class="devicon-sass-original colored"></i>`,
          iconDark: `<i class="devicon-sass-original"></i>`,
          name: 'SCSS'
      }, {
          id: 4,
          iconLight: `<i class="devicon-tailwindcss-original colored"></i>`,
          iconDark: `<i class="devicon-tailwindcss-original"></i>`,
          name: 'Tailwind'
      },
      {
          id: 5,
          iconLight: `<i class="devicon-javascript-plain colored"></i>`,
          iconDark: `<i class="devicon-javascript-plain"></i>`,
          name: 'Javascript'
        
      },
      {
          id: 6,
          iconLight: `<i class="devicon-typescript-plain colored"></i>`,
          iconDark: `<i class="devicon-typescript-plain"></i>`,
          name: 'Typescript'
      }, 
      {
          id: 7,
          iconLight: `<i class="devicon-react-original colored"></i>`,
          iconDark: `<i class="devicon-react-original"></i>`,
          name: 'React JS'
      }, 
      {
          id: 8,
          iconLight: `<i class="devicon-redux-original colored"></i>`,
          iconDark: `<i class="devicon-redux-original"></i>`,
          name: 'Redux'
      },
      {
        id: 9,
        iconLight: `<i class="devicon-nextjs-original-wordmark colored"></i>`,
        iconDark: `<i class="devicon-nextjs-original-wordmark"></i>`,
        name: 'Next JS'
      }
    ]
  
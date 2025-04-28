import { Banner } from "@/components/home/Banner";
import { About } from "@/components/home/About";
import { TechStack } from "@/components/home/TechStack";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <TechStack />
      <Contact />
    </>
  );
}

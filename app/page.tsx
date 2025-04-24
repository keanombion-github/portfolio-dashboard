import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6 max-w-lg w-full">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-muted-foreground">
          This is a demo admin dashboard project using Next.js, TailwindCSS, and shadcn/ui.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/projects">
            <Button variant="default" className="w-full">View Projects</Button>
          </Link>
          <Link href="/admin/projects">
            <Button variant="outline" className="w-full">Admin Dashboard</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

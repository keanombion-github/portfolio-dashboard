"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white dark:bg-black border-b-2 border-dashed border-[hsl(240, 3.7%, 15.9%)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-l-2 border-r-2 border-dashed border-[hsl(240, 3.7%, 15.9%)]">
        <Link href="/" className="text-xl font-bold text-primary">
          Kean
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="/admin/projects">
            <Button variant="ghost">Admin</Button>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/projects">
                  <Button variant="ghost" className="w-full justify-start">
                    Projects
                  </Button>
                </Link>
                <Link href="/admin/projects">
                  <Button variant="ghost" className="w-full justify-start">
                    Admin
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import icon1 from '@/assets/images/banner-shape-1.png'
import icon2 from '@/assets/images/banner-shape-2.png'
import icon3 from '@/assets/images/banner-shape-3.png'
import icon4 from '@/assets/images/banner-shape-1.png'

export const Banner = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center justify-center border-b-2 border-dashed border-[hsl(240, 3.7%, 15.9%)]">
            <div className="container mx-auto border-l-2 border-r-2 border-dashed border-[hsl(240, 3.7%, 15.9%)] py-16 px-2 relative">
                <div>
                    <img src={icon1.src} alt="" className={`absolute left-6 top-24`} style={{filter: `${theme == 'light' ? 'brightness(0)' : ''}`}}/>
                    <img src={icon2.src} alt="" className="absolute left-24 bottom-24"  style={{filter: `${theme == 'light' ? 'brightness(0)' : ''}`}}/>
                    <img src={icon3.src} alt="" className="absolute right-24 top-24"  style={{filter: `${theme == 'light' ? 'brightness(0)' : ''}`}}/>
                    <img src={icon4.src} alt="" className="absolute right-6 bottom-24 "  style={{filter: `${theme == 'light' ? 'brightness(0)' : ''}`}}/>
                </div>
                <div className="px-8 py-30 rounded-2xl text-center space-y-6 w-full" >
                    <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
                    <p className="text-muted-foreground">
                        This is a admin dashboard project using Next.js, TailwindCSS, and shadcn/ui.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/projects">
                        <Button variant="default" className="w-full cursor-pointer">View Projects</Button>
                        </Link>
                        <Link href="/admin/projects">
                        <Button variant="outline" className="w-full">Admin Dashboard</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
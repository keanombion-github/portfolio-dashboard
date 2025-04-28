'use client'

import { TechSkills } from "@/lib/data"
import { useTheme } from "next-themes"

export const TechStack = () => {
    const { theme } = useTheme()
    return (
        <div className="border-b-2 border-dashed border-[hsl(240, 3.7%, 15.9%)]">
            <div className="container mx-auto px-6 py-24 border-r-2 border-l-2 border-dashed border-[hsl(240, 3.7%, 15.9%)] grid lg:grid-cols-12">
                <h2 className="text-4xl font-bold lg:col-span-3 mb-6">Tech stack</h2>
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 col-span-9">
                    {TechSkills.map(tech =>  (
                        <div className="border-2 border-[hsl(240, 3.7%, 15.9%)] rounded p-4 grid items-center justify-center text-center" key={tech.id}>
                            <div dangerouslySetInnerHTML={{ __html: theme === 'dark' ? tech.iconDark : tech.iconLight }}  className="text-[5rem]"/>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
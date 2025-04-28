export const Contact = () => {
    return (
        <div className="border-b-2 border-dashed border-[hsl(240, 3.7%, 15.9%)]">
            <div className="container mx-auto px-6 py-24 border-r-2 border-l-2 border-dashed border-[hsl(240, 3.7%, 15.9%)]">
                <h2 className="text-4xl font-bold mb-6">Contact</h2>
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="col-start-1 col-end-7">
                        <h5 className="font-bold text-xl">Let&apos;s Connect</h5>
                        <p>I&apos;m always excited to collaborate on new projects and explore opportunities in software development. Whether you have a specific project in mind or just want to connect, I&apos;d love to hear from you.</p>
                    </div>
                    <div className="col-start-9 col-end-[-1]">
                        <h5 className="font-bold text-xl">Email</h5>
                        <p><a href="mailto:keanombion@gmail.com">keanombion@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
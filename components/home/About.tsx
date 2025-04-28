import aboutImg from '@/assets/images/about-img.png'

export const About = () => {
    return (
        <div className="border-b-2 border-dashed border-[hsl(240, 3.7%, 15.9%)] ">
            <div className='container mx-auto px-6 py-16 border-r-2 border-l-2 border-dashed border-[hsl(240, 3.7%, 15.9%)] '>
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div>
                        <h2 className='text-4xl mb-8 font-bold'>About Me</h2>
                        <p>I&apos;m a passionate Front-End Developer based in the Philippines, dedicated to turning ideas into engaging digital experiences. With 6 years of professional experience, I seamlessly blend clean, intuitive design with robust, scalable development practices to create solutions that not only look great but also perform flawlessly.
                        <br/>
                        <br/>
                        Throughout my career, I&apos;ve collaborated with startups, agencies, and established brands—transforming innovative concepts into impactful digital products that drive results.
                        <br/>
                        <br/>
                        My focus is on building responsive, user-centric interfaces that enhance both usability and aesthetics, while continually embracing new technologies to keep my skills fresh and ahead of industry trends.</p>
                    </div>
                    <img src={aboutImg.src} alt="" className='block mx-auto'/>
                </div>
            </div>
        </div>
    )
}
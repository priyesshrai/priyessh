import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LinkPreview } from './ui/link-preview'

export default function Projects() {
    return (
        <section className='section mt-20'>
            <div className="section-wraper">
                <div className='text-center relative w-full'>
                    <span className='inline-block px-3 py-[2px] text-l bg-white text-[#111111] rounded font-jura font-semibold'>Projects</span>
                </div>
                <div className="project w-full relative flex flex-col">
                    <div className="title-container text-center">
                        <span>My Latest Work</span>
                    </div>
                    <div className='relative w-full text-center text-xl text-slate-300 '>
                        <span style={{ fontFamily: "var(--font-syne)" }} className='sp'>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</span>
                    </div>

                    <div className="card relative w-full mt-10">
                        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>

                            {
                                projectData.map((data) => (
                                    <div className='w-full relative h-full rounded-lg border overflow-hidden bg-[#111111]' key={data.id}>
                                        <div className='w-full relative flex flex-col '>
                                            <div className='w-full h-45'>
                                                <Link href={data.url} className='block cursor-pointer w-full h-full'>
                                                    <Image src={data.img} className='pointer-events-none mx-auto w-full object-cover object-top h-full' width={300} height={300} alt='asd' />
                                                </Link>
                                            </div>

                                            <div className='w-full mt-1 px-2 flex flex-col'>
                                                <div className='relative w-full text-xl font-raleway font-semibold text-gray-100'>
                                                    <h3>{data.name}</h3>
                                                </div>

                                                <div className='text-[16px] font-raleway text-gray-200'>
                                                    <span>{data.time}</span>
                                                </div>
                                                <div className='text-[13px]/[1.2] text-gray-300 font-syne'>
                                                    <p>{data.desc}</p>
                                                </div>
                                            </div>

                                            <div className='w-full px-2 flex gap-1 mt-4 flex-wrap'>
                                                {
                                                    data.techUse.map((tech, idx) => (
                                                        <span key={idx} className='inline-block bg-[#252526] px-2 py-[2px] rounded-md mb-1 text-[12px] font-jura font-semibold hover:bg-gray-900'>{tech}</span>
                                                    ))
                                                }
                                            </div>

                                            <div className='mt-2 w-full relative p-2'>
                                                <span className='inline-block bg-gray-200 px-4 py-[5px] rounded-md mb-1 text-sm font-jura font-semibold'>
                                                    <LinkPreview url={data.url} className="text-[#252526]">
                                                        Website
                                                    </LinkPreview>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const projectData = [
    {
        id: "earthu-hues",
        name: "Earthy Hues",
        img: "/images/project/earthy-hues.png",
        url: "https://www.earthyhues.com/",
        desc: "Developed a dynamic and user-friendly tour and travel website, Earthy Hues, designed to provide seamless trip planning and booking experiences. The platform caters to groups of travelers, ensuring personalized itineraries, exceptional customer support, and memorable journeys that leave every tourist delighted.",
        time: "July 2024 - Present",
        techUse: ['Next JS', 'Tailwind', 'Resend', "MySQL", 'Node JS', 'Java Script', 'PHP', 'Shadcn UI'],

    },
    {
        id: "stjsaa",
        name: "St. John's School",
        img: "/images/project/sjsaa.png",
        url: "https://www.sjsaa.com/",
        desc: "Developed a web app for St. John’s School alumni, enabling secure registration, profile updates, and interaction with fellow members. The platform includes an admin panel for managing user activities, uploading events and albums, and printing user forms, creating a seamless and engaging experience for both alumni and administrators.",
        time: "Aug 2024 - Present",
        techUse: ['Rect JS', "MySQL", 'Node JS', 'Java Script', 'PHP', "GSAP", 'JWT', 'Axios', 'Material Ui'],

    },
    {
        id: "mahesh-carpets",
        name: "Mahesh Carpets",
        img: "/images/project/mahesh.png",
        url: "https://maheshcarpet.vercel.app/",
        desc: "Developed a web app for a carpet company using Next.js, Resend for email functionality, Tailwind CSS, and other modern technologies. The platform allows users to explore detailed product listings and seamlessly send order requests to the admin, ensuring an efficient and user-friendly experience.",
        time: "Dec 2024 - Present",
        techUse: ['Next JS', 'Node JS', "Resend", 'Java Script', 'Axios', 'Aceternity Ui', 'Tailwind', "Lenis", "Framer Motion"]

    },
    {
        id: "arya-portfolio",
        name: "Arya Graphic Designer",
        img: "/images/project/arya.png",
        url: "https://arya-new.vercel.app/",
        desc: "Developed a modern portfolio website for a friend using Next.js, Resend, Aceternity UI, Tailwind CSS, Lenis, and Framer Motion. The website showcases projects with smooth animations, interactive designs, and seamless email functionality, creating an engaging and professional online presence.",
        time: "January 2025 - Present",
        techUse: ['Next JS', 'Node JS', "Resend", 'Java Script', 'Axios', 'Aceternity Ui', 'Tailwind', "Lenis", "Framer Motion"]
    },
    {
        id: "hospital",
        name: "Hospital Management",
        img: "/images/project/hospital.webp",
        url: "https://doctorportels.000webhostapp.com/",
        desc: "Developed a hospital management system as a college project using PHP, Bootstrap, JavaScript, jQuery, and other technologies. The system enables users to register, log in, and book appointments with specific doctors online. Doctors can manage appointments by accepting or denying requests.",
        time: "Dec 2022 - Feb 2023",
        techUse: ['Java Script', 'PHP', 'BootStrap', 'JQery', 'MySQL']
    },

    {
        id: "dev",
        name: "Discussion Portal",
        img: "/images/project/dev.webp",
        url: "https://github.com/PriyeshRai369/discussionportal",
        desc: "Developed a dynamic discussion portal using JavaScript, EJS, Node.js, Express.js, MongoDB, and JWT, enabling users to engage in open discussions and share knowledge seamlessly. The platform ensures secure user authentication and fosters meaningful interactions through an intuitive and responsive interface.",
        time: "January 2024 - March 2024",
        techUse: ['Node JS', "EJS", "MongoDB", "Express JS", 'Java Script', 'JWT']
    },

]

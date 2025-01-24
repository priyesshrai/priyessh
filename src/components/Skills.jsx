import React from 'react'
import { LinkPreview } from './ui/link-preview'

export default function Skills() {
    const skills = [
        {
            skillName: "Next JS",
            uri: "https://nextjs.org/"
        },
        {
            skillName: "React JS",
            uri: "https://react.dev/"
        },
        {
            skillName: "Node JS",
            uri: "https://nodejs.org/en"
        },
        {
            skillName: "Express JS",
            uri: "https://expressjs.com/"
        },
        {
            skillName: "MongoDB",
            uri: "https://www.mongodb.com/"
        },
        {
            skillName: "Java Script",
            uri: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            skillName: "Type Script",
            uri: "https://www.typescriptlang.org/"
        },
        {
            skillName: "Version Controle/GitHub",
            uri: "https://github.com/"
        },
        {
            skillName: "Tailwind",
            uri: "https://tailwindcss.com/"
        },
        {
            skillName: "MySQL",
            uri: "https://www.mysql.com/"
        },
        {
            skillName: "Java",
            uri: "https://www.java.com/en/"
        },
        {
            skillName: "C Programming",
            uri: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
    ]
    return (
        <section className='section mt-10'>
            <div className="section-wraper">
                <div className='skills relative w-full flex flex-col gap-2'>
                    <div className="title-container">
                        <span>Skills</span>
                    </div>

                    <div className='skills-block relative w-full mt-5'>
                        <div className='w-full relative flex gap-1 flex-wrap'>
                            {
                                skills.map((data, idx) => (
                                    <div key={idx} className='relative px-3 py-[2px] bg-slate-200 rounded-lg mb-1 hover:bg-green-200'>
                                        <span className='text-[14px]'>
                                            <LinkPreview url={data.uri} className='text-black font-syne'>
                                                {data.skillName}
                                            </LinkPreview>
                                        </span>
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

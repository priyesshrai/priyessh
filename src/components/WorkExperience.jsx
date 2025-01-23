import Image from 'next/image'
import React from 'react'
import { LinkPreview } from './ui/link-preview'

export default function WorkExperience() {
    return (
        <section className='section mt-10'>
            <div className="section-wraper">
                <div className="experience">
                    <div className="title-container">
                        <span>Work Experience</span>
                    </div>

                    <div className="experience-block mt-10">
                        <div className="company-details">
                            <div className="company-details-container">
                                <div className="company-logo">
                                    <Image src='/images/company-logo/2.jpg' width={200} height={200} alt='Wizards Next' />
                                </div>
                                <div className="company-description">
                                    <div className="company-title">
                                        <span>
                                            <LinkPreview url="https://wizards.co.in/">
                                                Wizards Next LLP
                                            </LinkPreview>
                                        </span>
                                    </div>
                                    <div className="role w-full relative mt-[-6px]">
                                        <span className='text-[#dadada]' style={{ fontFamily: "var(--font-jura)" }}>Full Stack Developer</span>
                                    </div>
                                    <div className="w-full relative mt-1 tx">
                                        <span>As a Full Stack Developer at Wizards Next LLP, I have had the opportunity to work on a wide range of exciting projects, enhancing my skills and contributing to the development of innovative web solutions. My primary responsibilities involve both front-end and back-end development, with occasional focus on frontend-specific tasks as well.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="time">
                            <span>June 2024 - Present</span>
                        </div>
                    </div>

                    <div className="experience-block mt-10">
                        <div className="company-details">
                            <div className="company-details-container">
                                <div className="company-logo">
                                    <Image src='/images/company-logo/3.jpg' width={200} height={200} alt='Wizards Next' />
                                </div>
                                <div className="company-description">
                                    <div className="company-title">
                                        <span>
                                            <LinkPreview url="http://www.softproindia.in/index.php">
                                                Softpro India
                                            </LinkPreview>
                                        </span>
                                    </div>
                                    <div className="role w-full relative mt-[-6px]">
                                        <span className='text-[#dadada]' style={{ fontFamily: "var(--font-jura)" }}>Java Developer</span>
                                    </div>
                                    <div className="w-full relative mt-1 tx">
                                        <span>Here I have developed the college management system for the Nalanda Open University.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="time">
                            <span>July 2022 - Sept. 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

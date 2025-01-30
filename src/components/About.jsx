import React from 'react'
import { LinkPreview } from './ui/link-preview'

export default function About() {
    return (
        <section className='section mt-10'>
            <div className="section-wraper">
                <div className="about">
                    <div className="title-container">
                        <span>About</span>
                    </div>
                    <div className="description">
                        <span>
                            Work For Money 😊 and CODE for Passion! I'M a Full Stack Developer currently working at
                            <LinkPreview url="https://wizards.co.in/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                                &nbsp;@Wizards, &nbsp;
                            </LinkPreview>
                            where I bring ideas to life by crafting scalable and innovative web and app solutions.

                        </span>
                        <br />
                        <span>
                            With a Bachelor in Computer Science and Engineering, I specialize in technologies like Java Script, PHP, Java, and C, building scalable and innovative web and app solutions. I’ve gained valuable industry experience through my internship with Softpro India Computer Technologies. Trying to make "Hello World" the new "abc".
                        </span>

                        <br />
                        <span style={{ fontFamily: "var(--font-jura)", fontSize: "1.3rem" }}>Beyond tech, I’m a cricket enthusiast who believes in balancing work with play and finding inspiration both on and off the field.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

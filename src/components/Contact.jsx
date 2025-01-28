import { IconSend } from '@tabler/icons-react'
import React from 'react'

export default function Contact() {
    return (
        <section className='section mt-20 mb-24' id='contact'>
            <div className="section-wraper">
                <div className='text-center relative w-full'>
                    <span className='inline-block px-3 py-[2px] text-l bg-white text-[#111111] rounded font-jura font-semibold'>Contact</span>
                </div>

                <div className="contact relative w-full flex flex-col mt-4">
                    <div className="title-container text-center">
                        <span>Get in Touch</span>
                    </div>

                    <div className='relative w-full text-center text-xl text-slate-300 font-syne'>
                        <span>"Building innovative solutions, one line of code at a time.
                            Reach out and let's create something amazing together!"</span>
                    </div>

                    <div className='relative w-full mt-5 flex flex-col gap-4'>
                        <div className='flex-1 relative bg-[#252526] rounded-lg '>
                            <input type="text" placeholder='Eg - Priyessh rai' spellCheck required name='name' className='relative w-full bg-transparent px-4 py-3 rounded-lg outline-none border border-transparent font-jura text-xl text-[#dadada] focus:border-yellow-300 focus:border-1' />
                        </div>
                        <div className='flex-1 relative bg-[#252526] rounded-lg '>
                            <input type="email" placeholder='Eg - priyesshrai@gmail.com' spellCheck required name='email' className='relative w-full bg-transparent px-4 py-3 rounded-lg outline-none border border-transparent font-jura text-xl text-[#dadada] focus:border-yellow-300 focus:border-1' />
                        </div>
                        <div className='flex-1 relative bg-[#252526] rounded-lg '>
                            <input type="tel" placeholder='Eg - +91 9847623236' required name='contact' className='relative w-full bg-transparent px-4 py-3 rounded-lg outline-none border border-transparent font-jura text-xl text-[#dadada] focus:border-yellow-300 focus:border-1' />
                        </div>
                        <div className='flex-1 relative bg-[#252526] rounded-lg '>
                            <textarea placeholder='Messgae' required spellCheck name='message' className='relative w-full bg-transparent px-4 py-3 rounded-lg outline-none border border-transparent font-jura text-xl text-[#dadada] focus:border-yellow-300 focus:border-1 h-40 ' />
                        </div>
                        <div className='flex-1 relative flex justify-center align-middle '>
                            <button className='w-full leading-none px-16 py-3 bg-white text-[20px] text-black rounded-lg flex align-middle justify-center hover:bg-yellow-300 transition-all gap-2'>Send <IconSend className='inline-block w-5' /> </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

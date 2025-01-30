import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className='section'>
            <div className="section-wraper">
                <div className="hero">
                    <div className="my-details">
                        <div className="my-details-container">
                            <div className="name">
                                <h1>Hi, I'm Priyessh Rai
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ldpyyqjp.json"
                                        trigger="loop"
                                        delay="1500"
                                        className="hnd"
                                        style={{ width: "60px", height: "60px" }}>
                                    </lord-icon></h1>
                            </div>
                            <div className="bio">
                                <p>I’m a Software Developer Building User-Friendly Interfaces, Dynamic Web Applications, Android Apps & Powerful Backend Systems with JavaScript and Modern Frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-image">
                        <div className="img-container">
                            <Image src="/images/02.jpg" width={200} height={200} alt="Priyessh rai" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

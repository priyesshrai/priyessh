import React from 'react'
import { LinkPreview } from './ui/link-preview'
import Image from 'next/image'

export default function Education() {
  return (
    <section className='section mt-10'>
      <div className="section-wraper">
        <div className="education relative w-full flex flex-col gap-2">
          <div className="title-container">
            <span>Education</span>
          </div>

          {/* <div className="experience-block mt-10">
            <div className="company-details">
              <div className="company-details-container">
                <div className="company-logo">
                  <Image src='/images/company-logo/college.jpg' width={200} height={200} alt='Wizards Next' />
                </div>
                <div className="company-description">
                  <div className="company-title">
                    <span>
                      <LinkPreview url="https://fgp.org.in/">
                        Feroze Gandhi Polytechnic
                      </LinkPreview>
                    </span>
                  </div>
                  <div className="role w-full relative mt-[-6px]">
                    <span className='text-[#dadada]' style={{ fontFamily: "var(--font-jura)" }}>Computer Science & Enginnering</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="time">
              <span>Nov 2020 - Oct. 2023</span>
            </div>
          </div> */}

          <div className="experience-block mt-10">
            <div className="company-details">
              <div className="company-details-container">
                <div className="company-logo">
                  <Image src='/images/company-logo/FGP.JPG' width={200} height={200} alt='Wizards Next' />
                </div>
                <div className="company-description">
                  <div className="company-title">
                    <span>
                      <LinkPreview url="https://fgp.org.in/">
                        Feroze Gandhi Polytechnic
                      </LinkPreview>
                    </span>
                  </div>
                  <div className="role w-full relative mt-[-6px]">
                    <span className='text-[#dadada]' style={{ fontFamily: "var(--font-jura)" }}>Computer Science & Enginnering</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="time">
              <span>Nov 2020 - Oct. 2023</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

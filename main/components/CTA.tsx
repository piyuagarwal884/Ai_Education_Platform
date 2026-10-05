import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>
        Start Your Learning Journey
      </div>
      <h3 className="text-3xl font-bold">Build and Personalize Your Learning Experience.</h3>
      <p>Pick your name, subject, voice and personality to create a unique learning experience.</p>
      <Image src='/images/cta.svg' alt='CTA' width={362} height={232}/>
      <button className = "btn-primary">
        <Image src='/icons/plus.svg' alt='Plus' width={12} height={12} />
        <Link href='/companions/new'>
          <p>Build a new companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA

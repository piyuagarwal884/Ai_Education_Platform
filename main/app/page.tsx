import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { Button } from '@base-ui/react'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="101"
          name="Codey the Coding Mentor"
          topic="Introduction to JavaScript"
          subject="computer science"
          duration={30}
          color="#dbeafe"
        />

        <CompanionCard
          id="102"
          name="Mathy the Problem Solver"
          topic="Quadratic Equations"
          subject="mathematics"
          duration={45}
          color="#dcfce7"
        />

        <CompanionCard
          id="103"
          name="Newton the Physics Guide"
          topic="Laws of Motion"
          subject="physics"
          duration={40}
          color="#fef3c7"
        />

      </section>

      <section className='home-section'>
        <CompanionList 
        title = "Recently Completed Sessions"
        companions = {recentSessions}
        classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>

    </main>
  )
}

export default Page
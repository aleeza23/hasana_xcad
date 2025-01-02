import React from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { FeatureCard } from '../components/FeatureCard'

export const CoreFeatures = () => {
  return (
    <div className='py-12'>
        <div className="container">
            <SectionHeading heading='Core Features' />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-x-20">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />


            </div>
        </div>

    </div>
  )
}

import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SectionText } from '../components/SectionText';
import { LeftTimelineItem } from '../components/LeftTimelineItem';
import { RightTimelineItem } from '../components/RightTimelineItem';

// IMPORTING ICONS
import iconOne from '../assets/icons/reward.svg';

export const Roadmap = () => {
  const timelineItems = [
    {
      number: 1,
      title: "Foundation of Spiritual Habits",
      objective: "Build foundational spiritual habits.",
      features: ["Prayer Tracking", "Quran Reading Tracker", "Quran Listening Tracker"],
      icon: iconOne,
      quarter: "Q1 2024",
    },

  ];


  return (
    <div className="py-12">
      <div className="container">
        <SectionHeading
          className="max-w-2xl mx-auto"
          heading={'Our Roadmap to Enriching Your Spiritual Journey'}
        />
        <SectionText
          className="max-w-2xl mx-auto mt-8"
          text={
            "Embark on Hasanat's ambitious journey to blend Islamic values with cutting-edge technology, enhancing both your spiritual and daily life across a comprehensive digital ecosystem."
          }
        />

        {/* Timeline */}
        <div className="relative overflow-x-clip my-12">
          {/* Vertical Line */}
          <div className="absolute inset-0 w-[1px] bg-gradient-to-b from-[#814E00] to-[#C07F00] left-1/4 lg:left-0 lg:mx-auto"></div>

          {/* Top Dot */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 lg:left-1/2  lg:-translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>

          {/* Timeline Items */}
          {timelineItems.map((item, index) =>
            index % 2 === 0 ? (
              <RightTimelineItem className={'lg:-mt-16'} key={index} item={item} />

            ) : (
              <LeftTimelineItem className={'lg:-mt-16'} key={index} item={item} />
            )
          )}

          {/* Bottom Dot */}
          <div className="absolute bottom-0 left-1/4 -translate-x-1/2 lg:left-1/2  lg:-translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

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
    {
      number: 2,
      title: "Engagement and Reward System",
      objective: "Encourage and incentivize user participation and engagement.",
      features: ["Introduction of the Hasanah coin for rewarding user activities."],
      icon: iconOne,
      quarter: "Q2 2024",
    },
    {
      number: 3,
      title: "Community Building and Enhanced Interaction",
      objective: "Foster connections and meaningful interactions.",
      features: [
        "Leaderboard",
        "Social Sharing",
        "Competitions and Challenges (Aamal: Spirit, Mind, and Body)",
      ],
      icon: iconOne,
      quarter: "Q3 2024",
    },
    {
      number: 4,
      title: "Social Integration",
      objective: "Create deeper social foundations within the app to foster connectivity.",
      features: [
        "Expansion of social sharing capabilities and integration of more social features.",
      ],
      icon: iconOne,
      quarter: "Q4 2024",
    },
    {
      number: 5,
      title: "Educational Expansion",
      objective: "Enrich user knowledge with Islamic educational content.",
      features: ["Launch of educational modules for Islamic learning."],
      icon: iconOne,
      quarter: "Q1 2025",
    },
    {
      number: 6,
      title: "Commercial Expansion",
      objective: "Open avenues for commerce within the Islamic ecosystem.",
      features: [
        "Development of an e-commerce platform for Islamic products and services.",
      ],
      icon: iconOne,
      quarter: "Q2 2025",
    },
    {
      number: 7,
      title: "Lifestyle and Entertainment",
      objective: "Enhance user lifestyle with entertainment options.",
      features: [
        "Islamic Recreation Tracker",
        "Gaming and AR",
        "Decentralized Game and NFT Marketplace",
      ],
      icon: iconOne,
      quarter: "Q3 2025",
    },
    {
      number: 8,
      title: "Financial Ecosystem Development",
      objective: "Build robust financial ecosystem for Islamic transactions.",
      features: ["DEX (Decentralized Exchange)", "CEX (Centralized Exchange)"],
      icon: iconOne,
      quarter: "Q4 2025",
    },
    {
      number: 9,
      title: "Governance Portal",
      objective:
        "Launch a governance portal for active user participation in Islamic decisions.",
      features: ["Governance portal functionality."],
      icon: iconOne,
      quarter: "Q1 2026",
    },
  ];


  return (
    <div className="">
      <div className="container">
        <SectionHeading
          className="max-w-2xl mx-auto"
          heading={'Our Roadmap to Enriching Your Spiritual Journey'}
        />
        <SectionText
          className="max-w-2xl mx-auto my-8"
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
              <RightTimelineItem className={'lg:-mt-20'} key={index} item={item} />

            ) : (
              <LeftTimelineItem className={'lg:-mt-20'} key={index} item={item} />
            )
          )}

          {/* Bottom Dot */}
          <div className="absolute bottom-0 left-1/4 -translate-x-1/2 lg:left-1/2  lg:-translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

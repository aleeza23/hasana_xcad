import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCard } from '../components/FeatureCard';

//DESKTOP IMAGES
import image01 from '../assets/images/Rectangle 2736.png';
import image02 from '../assets/images/Rectangle 19374.png';
import image03 from '../assets/images/Rectangle 19375.png';
import image04 from '../assets/images/Rectangle 19376.png';
import image05 from '../assets/images/Rectangle 19377.png';
import image06 from '../assets/images/Rectangle 19378.png';


//MOBILE IMAGES
// MOBILE IMAGES
import mobImage01 from  '../assets/images/featuremob01.png'


export const CoreFeatures = () => {
    const features = [
        {
            image: image01,
            mobileImage: mobImage01,
            title: 'Islamic Activities Tracking',
            description: 'Daily Prayers and Devotion: Log your five daily prayers, Quran readings, and religious observances. Automated Tracking: Smart technology keeps track of your religious activities effortlessly.',
        },
        {
            image: image02,
            mobileImage: mobImage01,
            title: 'PRAY TO EARN A REVOLUTIONARY CONCEPT',
            description: 'Earn Rewards: Gain HSNT tokens for devotion and participation in Islamic activities. Challenges and Achievements: Special challenges to earn rewards and achieve spiritual milestones.',
        },
        {
            image: image03,
            mobileImage: mobImage01,
            title: 'Community Engagement',
            description: 'Connect with Believers: Join a global Muslim network, share insights, and grow in faith together. Community Challenges: Participate in communal activities to strengthen the bonds of the Ummah.',
        },
        {
            image: image04,
            mobileImage: mobImage01,
            title: 'Educational Resources',
            description: 'Islamic Knowledge: Access a library of Islamic teachings, history, and cultural insights. Interactive Learning: Engage with content in an interactive and immersive way, deepening your understanding and appreciation of Islamic traditions and practices.',
        },
        {
            image: image05,
            mobileImage: mobImage01,
            title: 'Privacy and Security',
            description: 'Protected Data: Top-notch data security and privacy measures to protect your information. Customizable Settings: Control your sharing preferences for a secure experience.',
        },
        {
            image: image06,
            mobileImage: mobImage01,
            title: 'Holistic Lifestyle Integration',
            description: 'Reminders and Notifications: Timely reminders for prayers, fasting, and religious observances. Seamless Integration: Integrate spiritual practices into daily life with intuitive app design.',
        },
    ];

    return (
        <div className='py-12'>
            <div className="container">
                <SectionHeading heading='Core Features' />

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-x-20 mt-12">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            image={feature.image} 
                            mobileImage={feature.mobileImage}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

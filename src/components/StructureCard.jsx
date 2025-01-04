import React from 'react';
import { CardBox } from './CardBox';

export const StructureCard = ({ title, description, icon , margin}) => {
  return (
    <CardBox className={`lg:w-max relative ${margin && margin}`} boxPadding="py-6">
      <h1 className="uppercase text-2xl gradient-text max-w-xs">{title}</h1>
      <p className="mt-4 font-roboto font-light leading-loose text-xs max-w-sm">
        {description}
      </p>

      <div className="absolute top-0 -translate-y-1/2 lg:translate-x-1/2 -right-3 lg:right-0">
        <div className="relative">
          <svg
            className=" size-14 lg:size-20"
            width="110"
            height="109"
            viewBox="0 0 110 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="108.82"
              y="0.5"
              width="107.238"
              height="108.32"
              rx="53.6189"
              transform="rotate(90 108.82 0.5)"
              fill="url(#paint0_linear_127_11155)"
              stroke="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_127_11155"
                x1="163.439"
                y1="0"
                x2="163.439"
                y2="109.32"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#814E00" />
                <stop offset="1" stopColor="#C07F00" />
              </linearGradient>
            </defs>
          </svg>

          <img
            src={icon}
            alt="Dynamic Icon"
            className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 size-8 lg:size-10"
          />
        </div>
      </div>
    </CardBox>
  );
};

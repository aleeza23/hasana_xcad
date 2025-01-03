import React from 'react';

export const LeftTimelineItem = ({ item, className }) => {
  const { number, title, objective, features, icon, quarter } = item;

  return (
    <div className={`lg:flex pt-12 lg:pt-0 items-center relative justify-between ${className}`}>
      {/* Dot */}
      <div className="absolute left-1/4 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 p-[0.22rem] bg-gradient-to-b from-[#814E00] to-[#C07F00] rounded-full">
        <div className="bg-white w-full h-full rounded-full"></div>
      </div>

      {/* Arrow and Number */}
      <div className="absolute left-[12%] top-[5%] lg:top-1/2 lg:-translate-y-1/2 lg:left-[42%] -translate-x-1/2">
        <svg className='size-20 lg:size-[175px]' width="175" height="18" viewBox="0 0 175 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 9.00002L15 17.6603L15 0.339761L0 9.00002ZM175 7.5L13.5 7.50002L13.5 10.5L175 10.5L175 7.5Z"
            fill="url(#paint0_linear_127_10675)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_127_10675"
              x1="87.5"
              y1="9.00001"
              x2="87.5"
              y2="8.00001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#814E00" />
              <stop offset="1" stopColor="#C07F00" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="gradient-text font-roboto font-extrabold opacity-50 text-6xl lg:text-9xl absolute left-[42%] top-1/2 -translate-y-1/2 -translate-x-1/2">
          {number}
        </h1>
        <p className="absolute left-[190%] lg:left-[170%] top-1/2 -translate-y-1/2 w-full -translate-x-1/2 gradient-text font-bold">
          {quarter}
        </p>
      </div>

      {/* Text */}
      <div className="lg:ms-auto pt-12 lg:pt-0 w-2/3 lg:w-full ms-auto">
        <div className="flex flex-col items-start ">
          <div className="flex items-start justify-center gap-3 mb-4">
            <div className="bg-gradient-to-b from-[#814E00] to-[#C07F00] flex-shrink-0 p-2 lg:p-3 rounded-full">
              <img src={icon} alt="icon" className="size-5 lg:size-10" />
            </div>
            <h1 className="font-poppins text-md lg:text-xl max-w-56 mb-3 leading-[1.20] font-extralight">
              {title}
            </h1>
          </div>

          <p className="max-w-xs text-sm">{objective}</p>

          {/* Features */}
          <div className="mt-4">
            <p className="font-roboto font-bold">Features:</p>
            <ul className="pt-4">
              {features.map((feature, index) => (
                <li key={index} className="relative flex items-start gap-4 mt-1 z-10">
                  <div className={`flex flex-col items-center  gap-1 ${index === 0 && 'mt-1'}`}>
                    <div className="bg-gradient-to-b from-[#814E00] to-[#C07F00] size-3.5 p-[1px] rounded-full">
                      <div className="bg-[#281c1c] w-full h-full rounded-full"></div>
                    </div>
                    {index < features.length - 1 && (
                      <div className="w-[1px] bg-gradient-to-b from-[#814E00] to-[#C07F00] h-5"></div>
                    )}
                  </div>
                  <p className="max-w-52 text-sm">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import footerImg from '../assets/images/footerImg.png'
import { TiPlus } from "react-icons/ti";

export const Footer = () => {
  return (

    <footer className='relative w-full lg:-mt-52 '>
      <div className="absolute right-0  left-0 ">
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-full">
          <div className="container w-full">
            {/* The box */}
            <div className="relative rounded-full h-[930px] lg:-mt-9 lg:h-auto p-4 lg:p-6 bg-gradient-to-b from-[#814E00] to-[#C07F00] overflow-hidden">
              {/* Shape decorations */}
              <div className="absolute top-0 left-0 rotate-90 lg:rotate-0 lg:top-12 lg:bottom-0 lg:left-0 h-64 w-64 rounded-full rounded-b-none rounded-tl-none bg-gradient-to-bl from-[#814E00] to-[#C07F00]"></div>
              <div className="absolute -top-20 -left-28 lg:top-44 lg:-left-12 lg:-bottom-32 w-64 h-64 rounded-full border-2 border-[#241702]"></div>
              <div className="absolute w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-9 lg:top-56 lg:-bottom-3 lg:left-16 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 bg-gradient-to-l from-[#814E00] to-[#C07F00]"></div>
              <div className="absolute w-28 h-28 lg:h-20 lg:w-20 rotate-0 top-10 -left-12 lg:top-[14.4rem] lg:-bottom-4 lg:left-14 rounded-full rounded-bl-none rounded-t-none lg:-rotate-90 border-4 border-opacity-30 border-[#814E00]"></div>

              {/* Content inside the box */}
              <div className="flex lg:flex-row flex-col justify-end mt-auto h-full gap-6 lg:gap-0 items-center lg:justify-end">
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <p className="uppercase font-bold font-roboto tracking-widest">Ready to</p>
                    <h1 className="font-roboto font-bold text-5xl lg:text-4xl">Enhance Your Spiritual Life?</h1>
                  </div>
                  <button className="bg-[#000000] rounded-full w-full lg:w-max font-roboto font-medium px-6 py-3 shadow-xl">
                    Download Hasanat Now
                  </button>
                  <p className="font-roboto font-thin text-sm w-full lg:text-xs max-w-[18rem] text-center">
                    Earn Content Creator Tokens by watching your favorite YouTubers
                  </p>
                  <h4 className="font-roboto font-bold tracking-widest uppercase text-sm">Available on iOS and Android</h4>
                </div>
                <div>
                  <img src={footerImg} alt="img" className="lg:size-64" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add grid below the box */}
        <div className="absolute bottom-1/3 hidden lg:block translate-y-2/3  w-full">
          <div className=" container w-full mt-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div>
                <nav className='flex flex-col gap-3'>
                  <a href="" className='font-roboto text-sm'>Products</a>
                  <a href="" className='font-roboto text-sm'>Products</a>
                  <a href="" className='font-roboto text-sm'>Products</a>
                  <a href="" className='font-roboto text-sm'>Products</a>

                </nav>
              </div>

              <div>
                <nav className='flex flex-col justify-start items-start gap-3'>
                  <a href="" className='font-roboto text-sm'>Play</a>
                  <a href="" className='font-roboto text-sm'>Play Buy-Hasanat</a>
                  <button className='border-2 mt-4 border-white/90 rounded-full font-poppins px-4 py-2'>Download App</button>
                  <button className='inline-flex gap-4 items-center justify-center py-3 rounded-md bg-gradient-to-t w-full mt-3  from-[#814E00] to-[#C07F00]'> <span className='font-poppins font-extrabold uppercase text-lg'>Connect Wallet</span> <TiPlus className='size-7 font-extrabold' /> </button>

                </nav>
              </div>

              <div>
                
              </div>
              <div>
              
              </div>
            </div>
          </div>
        </div>
        <svg
          className='w-full h-full'
          viewBox="0 0 1920 1312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mask 1 */}
          <mask
            id="mask0_127_10852"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="-37"
            y="0"
            width="2043"
            height="1312"
          >
            <path d="M2005.2 0H-36.1992V1311.93H2005.2V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_127_10852)">
            <path
              opacity="0.25"
              d="M1431.49 543.561C1431.49 543.561 1391.76 638.2 1285.25 576.984C1178.73 515.767 1169.94 453.143 965.695 513.304C761.45 573.465 687.274 569.947 643.332 500.991C599.389 432.034 517.129 335.988 343.116 346.191C168.751 356.393 79.1082 120.323 -46.392 81.9749C-172.244 43.6267 -263.293 161.838 -263.293 161.838V1377.37H2085C2085 1377.37 2024.89 1191.61 1890.25 1134.97C1755.61 1078.33 1774.94 1040.33 1762.29 945.338C1749.98 850.699 1491.25 786.668 1509.18 647.699C1527.46 508.379 1431.49 543.561 1431.49 543.561Z"
              fill="url(#paint0_linear_127_10852)"
            />
          </g>

          {/* Mask 2 */}
          <mask
            id="mask1_127_10852"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="-37"
            y="0"
            width="2043"
            height="1312"
          >
            <path d="M2005.2 0H-36.1992V1311.93H2005.2V0Z" fill="white" />
          </mask>
          <g mask="url(#mask1_127_10852)">
            <path
              opacity="0.25"
              d="M-222.515 179.779C-208.102 170.632 46.7656 109.415 126.917 281.807C207.068 454.198 292.141 456.309 420.454 466.863C549.118 477.418 510.097 479.529 653.526 572.057C796.954 664.585 880.973 616.386 985.381 583.315C1089.79 550.244 1256.42 629.403 1389.3 560.447C1522.54 491.49 1527.81 604.776 1527.81 604.776C1527.81 604.776 1490.9 703.285 1598.47 772.593C1706.04 841.55 1653.31 921.061 1683.19 1047.36C1713.07 1173.67 2004.85 1360.83 2004.85 1360.83L-275.949 1241.92L-222.515 179.779Z"
              fill="url(#paint1_linear_127_10852)"
            />
          </g>

          {/* Mask 3 */}
          <mask
            id="mask2_127_10852"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="-37"
            y="0"
            width="2043"
            height="1312"
          >
            <path d="M2005.2 0H-36.1992V1311.93H2005.2V0Z" fill="white" />
          </mask>
          <g mask="url(#mask2_127_10852)">
            <path
              d="M-188.769 214.961C-188.769 214.961 -146.935 409.868 29.5385 431.681C206.012 453.494 211.637 447.161 278.781 535.819C346.277 624.83 382.486 674.436 502.713 642.421C622.94 610.405 728.402 534.412 826.834 595.98C925.266 657.549 1142.87 762.039 1367.5 519.636C1592.14 277.233 1518.32 642.421 1518.32 642.421C1518.32 642.421 1362.58 778.223 1589.68 899.952C1669.83 945.336 1656.82 1081.49 1683.19 1169.44C1709.55 1257.4 1925.4 1427.68 1925.4 1427.68C1925.4 1427.68 272.102 1565.24 261.204 1567C250.306 1568.76 -367 1227.85 -367 1227.85L-188.769 214.961Z"
              fill="url(#paint2_linear_127_10852)"
            />
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient
              id="paint0_linear_127_10852"
              x1="910.855"
              y1="74.3203"
              x2="910.855"
              y2="1377.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#814E00" />
              <stop offset="1" stopColor="#C07F00" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_127_10852"
              x1="864.45"
              y1="161.797"
              x2="864.45"
              y2="1360.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#814E00" />
              <stop offset="1" stopColor="#C07F00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_127_10852"
              x1="779.2"
              y1="214.961"
              x2="779.2"
              y2="1567.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#814E00" />
              <stop offset="1" stopColor="#C07F00" />
            </linearGradient>
          </defs>
        </svg>

      </div>


    </footer>

  );
};

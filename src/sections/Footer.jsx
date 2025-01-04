import React from 'react';
import { TiPlus } from "react-icons/ti";

export const Footer = ({footerImage}) => {
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
                  <img src={footerImage} alt="img" className="lg:size-64" />
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
                <h1 className='font-roboto font-bold tracking-widest uppercase text-sm text-start'>Stay Connected</h1>
                <div className='flex gap-8 mt-4'>
                  <a href="" className='bg-white rounded-full size-10 flex justify-center items-center'><svg className='size-9' width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5606 38.7331V23.7071H29.6297L30.3832 17.8239H24.5606V14.0766C24.5606 12.3789 25.0336 11.2166 27.4701 11.2166H30.5574V5.97142C29.0552 5.81044 27.5453 5.73271 26.0346 5.73859C21.5539 5.73859 18.4776 8.47392 18.4776 13.4954V17.8129H13.4414V23.6961H18.4886V38.7331H24.5606Z" fill="black" />
                  </svg>
                  </a>
                  <a href="" className='bg-white rounded-full size-10 flex justify-center items-center' ><svg className='size-7' width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.1775 11.237C39.7659 11.8786 38.2442 12.3003 36.6675 12.502C38.2809 11.5303 39.5275 9.99031 40.1142 8.13865C38.5926 9.05531 36.9059 9.69698 35.1275 10.0636C33.6792 8.48698 31.6442 7.57031 29.3342 7.57031C25.0259 7.57031 21.5059 11.0903 21.5059 15.4353C21.5059 16.0586 21.5792 16.6636 21.7076 17.232C15.1809 16.902 9.36922 13.767 5.50089 9.01865C4.82255 10.1736 4.43755 11.5303 4.43755 12.9603C4.43755 15.692 5.81255 18.112 7.93922 19.487C6.63755 19.487 5.42755 19.1203 4.36422 18.5703V18.6253C4.36422 22.4386 7.07755 25.6286 10.6709 26.3436C9.51722 26.6594 8.30606 26.7033 7.13255 26.472C7.6305 28.0349 8.6057 29.4024 9.92108 30.3824C11.2365 31.3623 12.8259 31.9054 14.4659 31.9353C11.6859 34.1361 8.23988 35.3257 4.69422 35.3086C4.07089 35.3086 3.44755 35.272 2.82422 35.1986C6.30755 37.4353 10.4509 38.737 14.8876 38.737C29.3342 38.737 37.2726 26.747 37.2726 16.352C37.2726 16.0036 37.2725 15.6736 37.2542 15.3253C38.7942 14.2253 40.1142 12.832 41.1775 11.237Z" fill="black" />
                  </svg>
                  </a>
                  <a href="" className='bg-white rounded-full size-10 flex justify-center items-center'><svg className='size-7' width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8831 3.90625C25.9456 3.91175 26.9925 3.92275 27.8963 3.94842L28.252 3.96125C28.6626 3.97592 29.0678 3.99425 29.5573 4.01625C31.508 4.10792 32.839 4.41592 34.0068 4.86875C35.2168 5.33442 36.2361 5.96508 37.2555 6.98258C38.1877 7.89906 38.909 9.00766 39.3693 10.2312C39.8221 11.3991 40.1301 12.7301 40.2218 14.6826C40.2438 15.1702 40.2621 15.5754 40.2768 15.9879L40.2878 16.3436C40.3153 17.2456 40.3263 18.2924 40.33 20.3549L40.3318 21.7226V24.1242C40.3363 25.4615 40.3222 26.7987 40.2896 28.1356L40.2786 28.4912C40.264 28.9037 40.2456 29.3089 40.2236 29.7966C40.132 31.7491 39.8203 33.0782 39.3693 34.2479C38.9104 35.4722 38.1888 36.581 37.2555 37.4966C36.3387 38.4285 35.2302 39.1498 34.0068 39.6104C32.839 40.0632 31.508 40.3713 29.5573 40.4629C29.1223 40.4834 28.6872 40.5017 28.252 40.5179L27.8963 40.5289C26.9925 40.5546 25.9456 40.5674 23.8831 40.5711L22.5155 40.5729H20.1156C18.7778 40.5775 17.4399 40.5635 16.1025 40.5307L15.7468 40.5197C15.3116 40.5033 14.8765 40.4843 14.4415 40.4629C12.4908 40.3713 11.1598 40.0632 9.99012 39.6104C8.76668 39.1509 7.65852 38.4295 6.74329 37.4966C5.8102 36.5804 5.0882 35.4718 4.62762 34.2479C4.17479 33.0801 3.86679 31.7491 3.77512 29.7966C3.75469 29.3616 3.73636 28.9264 3.72012 28.4912L3.71095 28.1356C3.67717 26.7987 3.66189 25.4615 3.66512 24.1242V20.3549C3.66 19.0177 3.67345 17.6804 3.70545 16.3436L3.71829 15.9879C3.73295 15.5754 3.75129 15.1702 3.77329 14.6826C3.86495 12.7301 4.17295 11.4009 4.62579 10.2312C5.08616 9.00641 5.80961 7.89746 6.74512 6.98258C7.66012 6.05029 8.76755 5.32889 9.99012 4.86875C11.1598 4.41592 12.489 4.10792 14.4415 4.01625C14.9291 3.99425 15.3361 3.97592 15.7468 3.96125L16.1025 3.95025C17.4393 3.91768 18.7765 3.90362 20.1138 3.90808L23.8831 3.90625ZM21.9985 13.0729C19.5673 13.0729 17.2357 14.0387 15.5166 15.7578C13.7976 17.4769 12.8318 19.8084 12.8318 22.2396C12.8318 24.6707 13.7976 27.0023 15.5166 28.7214C17.2357 30.4405 19.5673 31.4062 21.9985 31.4062C24.4296 31.4062 26.7612 30.4405 28.4803 28.7214C30.1994 27.0023 31.1651 24.6707 31.1651 22.2396C31.1651 19.8084 30.1994 17.4769 28.4803 15.7578C26.7612 14.0387 24.4296 13.0729 21.9985 13.0729ZM21.9985 16.7396C22.7207 16.7395 23.4359 16.8816 24.1033 17.1579C24.7706 17.4342 25.377 17.8392 25.8878 18.3498C26.3986 18.8605 26.8038 19.4667 27.0804 20.134C27.3569 20.8012 27.4993 21.5164 27.4994 22.2387C27.4995 22.9609 27.3573 23.6762 27.0811 24.3435C26.8048 25.0108 26.3997 25.6172 25.8891 26.128C25.3785 26.6388 24.7722 27.0441 24.105 27.3206C23.4377 27.5971 22.7226 27.7395 22.0003 27.7396C20.5416 27.7396 19.1426 27.1601 18.1112 26.1287C17.0798 25.0972 16.5003 23.6983 16.5003 22.2396C16.5003 20.7809 17.0798 19.3819 18.1112 18.3505C19.1426 17.319 20.5416 16.7396 22.0003 16.7396M31.6253 10.3229C31.0175 10.3229 30.4346 10.5644 30.0048 10.9941C29.5751 11.4239 29.3336 12.0068 29.3336 12.6146C29.3336 13.2224 29.5751 13.8053 30.0048 14.235C30.4346 14.6648 31.0175 14.9062 31.6253 14.9062C32.2331 14.9062 32.816 14.6648 33.2457 14.235C33.6755 13.8053 33.917 13.2224 33.917 12.6146C33.917 12.0068 33.6755 11.4239 33.2457 10.9941C32.816 10.5644 32.2331 10.3229 31.6253 10.3229Z" fill="black" />
                  </svg>
                  </a>

                </div>
              </div>

              <div className='me-10'>
                <div className='flex flex-col items-end gap-3 justify-end'>
                  <a href="" className='font-roboto underline'>contact@hasanaweb.com</a>
                  <p className='text-xs font-roboto'>15Th Street Avenue, New York, USA</p>
                  <p className='text-xs font-roboto'>011-554-8798-6556</p>
                  <svg className='size-20' width="75" height="119" viewBox="0 0 75 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.7911 57.3181L46.8259 45.7272L46.7563 45.7946L18.9997 18.9062L14.1302 23.6235L18.9997 28.3407L51.4172 59.7441L37.7128 73.0198L5.29536 41.6164L0.425781 46.3337L37.7128 82.4543L56.2172 64.5288L56.7042 65.27C59.2781 68.9091 60.5998 73.222 60.5998 77.737C60.5998 83.6673 58.2346 89.2606 53.852 93.4387L37.7128 109.14L21.5041 93.4387C17.191 89.2606 14.7562 83.6673 14.7562 77.737C14.7562 75.0415 15.2432 72.4133 16.2171 69.9199L10.9997 64.8657C8.98232 68.8417 7.86928 73.2894 7.86928 77.737C7.86928 85.4194 10.9997 92.6975 16.6345 98.156L37.7128 118.575L58.7911 98.156C64.4259 92.6975 67.5564 85.4194 67.5564 77.737C67.5564 73.9632 66.7912 70.2568 65.3303 66.7526C63.7998 63.2484 61.6433 60.0811 58.7911 57.3181Z" fill="#F2F2F2" />
                    <path d="M37.7133 0.78125L32.8438 5.4985L37.7133 10.2157L70.1308 41.6191L75.0004 36.9019L37.7133 0.78125Z" fill="#F2F2F2" />
                  </svg>
                  <small className='font-roboto text-[10px] tracking-widest w-full'>© 2023 Hasana. All rights reserved.</small>
                  <ul className='flex gap-3 justify-end items-end w-full'>
                    <li className='flex-shrink-0'><a href="" className='underline font-roboto text-[10px]  flex gap-3 tracking-widest  '><span>Privacy Policy</span> <span className='border-r'></span></a></li>
                    <li className='flex-shrink-0'><a href="" className='underline font-roboto text-[10px]  flex gap-3 tracking-widest  '><span> Terms and Conditions</span> <span className='border-r'></span></a></li>
                    <li className='flex-shrink-0'><a href="" className='underline font-roboto text-[10px]  flex gap-3 tracking-widest  '><span> NFT Licence</span></a></li>
                  </ul>

                </div>
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

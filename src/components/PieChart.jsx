import React from 'react'

export const PieChart = () => {
    return (
        <div className="flex flex-col items-center mt-8 lg:mt-32">
            {/* Donut Chart */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full">
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `conic-gradient(
#C07F00 0% 40%, /* User Rewards */
#F7C75E 40% 60%, /* Development & Operations */
#C2A268 60% 75%, /* Community Initiatives */
#8E8E8E 75% 85%, /* Team & Advisors */
#383736 85% 95%, /* Marketing and Partnerships */
#5C5C5C 95% 100% /* Liquidity Pool */
)`,
                    }}
                ></div>
                <div className="absolute inset-6 bg-[#281c1c] rounded-full flex justify-center items-center">
                    <h1 className="text-2xl font-roboto gradient-text text-center font-medium">
                        Distribution Plan
                    </h1>
                </div>

                {/* Percentages */}
                <div className="absolute left-[65%] top-[30%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>User Rewards <br /> 40%</p>
                </div>
                <div className="absolute left-[5%] top-[105%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>Development & Operations <br /> 15%</p>
                </div>
                <div className="absolute right-[65%] top-[75%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>Community Initiatives<br /> 15%</p>
                </div>
                <div className="absolute right-[70%] top-[30%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>Team & Advisors<br /> 10%</p>
                </div>
                <div className="absolute right-[50%] top-[0%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>Marketing & Partnership<br /> 10%</p>
                </div>
                <div className="absolute right-[10%] -top-[15%] text-white w-full text-center ">
                    <p className='text-[9px] font-roboto  '>Liquidity Pool<br /> 15%</p>
                </div>

            </div>

            {/* Legend */}
            <div className="mt-20 space-y-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#C07F00]"></span>
                    <span className='font-roboto text-xs'>User Rewards (400 Million Tokens, 40%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#F7C75E]"></span>
                    <span className='font-roboto text-xs'>Development & Operations (200 Million Tokens, 20%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#C2A268]"></span>
                    <span className='font-roboto text-xs'>Community Initiatives (150 Million Tokens, 15%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#8E8E8E]"></span>
                    <span className='font-roboto text-xs'>Team & Advisors (100 Million Tokens, 10%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#383736]"></span>
                    <span className='font-roboto text-xs'>Marketing and Partnerships (100 Million Tokens, 10%)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4  bg-[#5C5C5C]"></span>
                    <span className='font-roboto text-xs'>Liquidity Pool (50 Million Tokens, 5%)</span>
                </div>
            </div>
        </div>
    )
}

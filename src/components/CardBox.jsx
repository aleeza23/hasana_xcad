import React from 'react'

export const CardBox = ({ children, className, boxPadding }) => {
    return (
        <div className={`bg-gradient-to-tr  from-white/90 to-white/0 rounded-xl h-max p-[1px] ${className}`}>
            <div className={`rounded-xl bg-[#281c1c] relative p-4 ${boxPadding}`}>
                {children}
            </div>
        </div>
    )
}

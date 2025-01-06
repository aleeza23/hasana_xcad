import React from 'react'
export const Hero = ({children}) => {
    return (
        <div className='relative'>
            <div className="container  h-[80vh] ">
               {children}
            </div>
        </div>
    )
}

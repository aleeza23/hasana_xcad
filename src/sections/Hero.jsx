import React from 'react'
export const Hero = ({children}) => {
    return (
        <div className='relative'>
            <div className="container overflow-hidden  h-[80vh] ">
               {children}
            </div>
        </div>
    )
}

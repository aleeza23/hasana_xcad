import React from 'react'
export const Hero = ({children}) => {
    return (
        <div>
            <div className="container  h-[80vh] ">
               {children}
            </div>
        </div>
    )
}

import React from 'react'

export const SectionText = ({ text, className }) => {
    return (
        <p className={`text-center ${className}`}>{text}</p>
    )
}

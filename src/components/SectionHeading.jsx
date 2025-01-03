import React from 'react';

export const SectionHeading = ({heading, className}) => {
  return (
    <>
      <h1 className={`text-center uppercase text-4xl gradient-text ${className} `}>
        {heading}
      </h1>
    </>
  );
};

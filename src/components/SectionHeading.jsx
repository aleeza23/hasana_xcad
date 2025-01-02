import React from 'react';

export const SectionHeading = ({heading}) => {
  return (
    <>
      <h1 className="text-center uppercase text-3xl gradient-text mb-12  ">
        {heading}
      </h1>
    </>
  );
};

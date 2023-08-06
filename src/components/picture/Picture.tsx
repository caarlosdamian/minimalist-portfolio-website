import React from 'react';

export const Picture = ({
  desktop,
  tablet,
  mobile,
  className,
}: {
  desktop: string;
  tablet: string;
  mobile: string;
  className?: string;
}) => {
  return (
    <picture>
      <source srcSet={mobile} media="(max-width: 599px)" />
      <source srcSet={tablet} media="(max-width: 1199px)" />
      <source srcSet={desktop} media="(min-width: 1200px)" />
      <img src={desktop} alt="hero" className={className} />
    </picture>
  );
};

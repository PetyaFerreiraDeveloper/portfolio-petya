import React from 'react';

import { ISvgType } from '@/types/commonTypes';

const LocationIcon = (props: ISvgType) => {
  const { width, height, fill } = props;
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 21"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M7.38 20.08a.63.63 0 0 1-.52-.27C6.59 19.46.35 11.08.35 7.38a7 7 0 0 1 14.06 0c0 3.7-6.25 12.08-6.51 12.43a.64.64 0 0 1-.52.27Zm0-18.43a5.74 5.74 0 0 0-5.73 5.73c0 2.47 3.75 8.2 5.73 11 2-2.75 5.73-8.48 5.73-10.95a5.74 5.74 0 0 0-5.73-5.78Z" />
      <path d="M7.38 10.15a2.78 2.78 0 1 1 2.77-2.77 2.78 2.78 0 0 1-2.77 2.77Zm0-4.25a1.48 1.48 0 1 0 1.47 1.48A1.48 1.48 0 0 0 7.38 5.9Z" />
    </svg>
  );
};

export default LocationIcon;

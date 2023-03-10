import React from 'react';

import { ISvgType } from '@/types/commonTypes';

const LinkedinIcon = (props: ISvgType) => {
  const { width, height, fill } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M27.5 54.75A27.25 27.25 0 0 1 8.24 8.22 27.23 27.23 0 0 1 27.5.25a27.25 27.25 0 0 1 19.28 46.51 27.09 27.09 0 0 1-19.24 8Zm0-53a25.75 25.75 0 1 0 0 51.5A25.75 25.75 0 0 0 45.72 9.3a25.59 25.59 0 0 0-18.19-7.55Z" />
      <path d="M21.06 22.25H16.2V38h4.86ZM18.6 20.26a3 3 0 0 0 1.63-.48 2.81 2.81 0 0 0 1.08-1.3 2.84 2.84 0 0 0 .18-1.68 2.94 2.94 0 0 0-.78-1.5 2.91 2.91 0 0 0-1.49-.8 2.87 2.87 0 0 0-1.69.16 2.9 2.9 0 0 0-1.8 2.69 2.88 2.88 0 0 0 .83 2 3 3 0 0 0 2.04.91ZM28.82 29.71c0-2.2 1-3.52 3-3.52s2.65 1.26 2.65 3.52V38h4.84V28c0-4.21-2.38-6.24-5.7-6.24a5.51 5.51 0 0 0-4.75 2.59v-2.1h-4.69V38h4.65Z" />
    </svg>
  );
};

export default LinkedinIcon;

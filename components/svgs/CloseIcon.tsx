import React from 'react';

import { ISvgType } from '@/types/commonTypes';

const CloseIcon = (props: ISvgType) => {
  const { width, height, fill, className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className={className}
    >
      <path d="M18 1.67 1.67 18M1.67 1.67 18 18" stroke={fill} />
    </svg>
  );
};

export default CloseIcon;

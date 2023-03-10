import React from "react";

import GithubIcon from "@/components/svgs/GithubIcon";
import LinkedinIcon from "@/components/svgs/LinkedinIcon";
import YoutubeIcon from "@/components/svgs/YoutubeIcon";
import EmailIcon from "@/components/svgs/EmailIcon";

import { ISvgType } from "@/types/commonTypes";

const SocialMedia = ({ width, height, fill, className }: ISvgType) => {
  return (
    <section className={className}>
        <a
        href="mailto:petianaidenova@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <EmailIcon width={width} height={height} fill={fill} />
      </a>
       <a
        href="https://www.linkedin.com/in/petyaferreira/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon width={width} height={height} fill={fill} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCt1QTbHaFvCWsAsR34jLzrQ"
        target="_blank"
        rel="noreferrer"
      >
        <YoutubeIcon width={width} height={height} fill={fill} />
      </a>
      <a
        href="https://github.com/PetyaFerreiraDeveloper"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon width={width} height={height} fill={fill} />
      </a>
    </section>
  );
};

export default SocialMedia;
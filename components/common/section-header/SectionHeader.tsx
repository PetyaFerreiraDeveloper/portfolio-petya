import React from "react";

interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return <h4>{text}</h4>;
};

export default SectionHeader;
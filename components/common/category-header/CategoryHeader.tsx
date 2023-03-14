import React from "react";

interface Props {
  text: string;
}

const CategoryHeader = ({ text }: Props) => {
  return <h3>{text}</h3>;
};

export default CategoryHeader;

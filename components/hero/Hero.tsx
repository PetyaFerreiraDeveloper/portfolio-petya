import React from "react";
import CategoryHeader from "../common/category-header/CategoryHeader";
import SectionHeader from "../common/section-header/SectionHeader";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 h-screen bg-red-300 justify-center">
      <div>
        <CategoryHeader text={"Hello, my name is"} />
        <SectionHeader text={"Petya Antonova Naydenova Ferreira"} />
        <h2></h2>
      </div>
      <p>
        I am a fullstack developer driven by the desire to create web
        applications, which can make a positive impact on the world around us.
        The satisfaction of building projects from start to end and my genuine
        curiosity on how the web works, is what drives me in this software
        engineering marathon. I work with React, NextJS, Typescript and
        Tailwind. And have very good knowledge and understanding of CSS and
        semantic HTML.
      </p>
    </section>
  );
};

export default Hero;

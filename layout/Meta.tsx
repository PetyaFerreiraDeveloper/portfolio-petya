import React from "react";
import Head from "next/head";

interface IMetaProps {
  title: string;
  description: string;
  imgPath?: string;
}

const Meta = (props: IMetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <meta name="description" content={props.description} key="desc" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imgPath && <meta property="og:image" content={props.imgPath} />}

      <link rel="icon" href="/favicon.ico" key="favicon" />
    </Head>
  );
};

export default Meta;

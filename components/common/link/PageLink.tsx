import React from 'react';
import Link from 'next/link';
import { IPageLinkType } from '@/types/commonTypes';

const PageLink = ({className, navigation, text}: IPageLinkType) => {
  return (
    <Link href={`${navigation}`} key={navigation} >
        <a className={`${className} cursor-pointer`}>{text}</a>
    </Link>
  )
}

export default PageLink;
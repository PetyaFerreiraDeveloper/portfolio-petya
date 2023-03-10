import { ReactElement } from "react";

export interface ISvgType {
    width: string;
    height: string;
    className?: string;
    fill?: string;
    style?: string;
}

export interface IPageLinkType {
    navigation: string;
    text?: string;
    icon?: ReactElement;
    className?: string;
  }


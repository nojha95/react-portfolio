import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

interface Props extends PropsWithChildren {
  variant?:
    | "heading"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p1"
    | "p2"
    | "p3";
  type?: "regular" | "semiBold" | "bold" | "extraBold";
  color?: string;
}

const Typography = ({
  variant = "h5",
  type = "regular",
  color = "var(--Gray-900, #18181b)",
  children,
}: Props) => {
  const Typography = styled.span`
    font-family: "Arial", sans-serif;
    color: ${color};
    font-style: normal;
    /* Variant-specific styles */

    ${variant === "h1" &&
    css`
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: -0.06rem;
    `}

    ${variant === "h2" &&
    css`
      font-size: 2rem;
      line-height: 2.5rem; /* 125% */
      letter-spacing: -0.04rem;
    `}
  
    ${variant === "h3" &&
    css`
      font-size: 1.75rem;
      font-style: normal;
      line-height: 2rem; /* 114.286% */
      letter-spacing: -0.035rem;
    `}
  
    ${variant === "h4" &&
    css`
      font-size: 1.5rem;
      font-style: normal;
      line-height: 1.75rem; /* 116.667% */
      letter-spacing: -0.03rem;
    `}
  
    ${variant === "h5" &&
    css`
      font-size: 1.25rem;
      line-height: 1.5rem; /* 120% */
      letter-spacing: -0.025rem;
      text-transform: capitalize;
    `}
    ${variant === "h6" &&
    css`
      font-size: 1rem;
      line-height: 1.25rem; /* 125% */
      letter-spacing: -0.02rem;
    `}
    ${variant === "p1" &&
    css`
      font-size: 1.25rem;
      font-style: normal;
      line-height: 1.75rem; /* 140% */
      letter-spacing: 0.025rem;
    `}
    ${variant === "p2" &&
    css`
      font-size: 1rem;
      line-height: 1.5rem; /* 150% */
      letter-spacing: 0.02rem;
    `}
    ${variant === "p3" &&
    css`
      font-size: 0.75rem;
      line-height: 1.25rem; /* 166.667% */
      letter-spacing: 0.015rem;
    `}
    ${type === "regular" &&
    css`
      font-weight: 400;
    `}
    ${type === "semiBold" &&
    css`
      font-weight: 600;
    `}
    ${type === "bold" &&
    css`
      font-weight: 700;
    `}
    ${type === "extraBold" &&
    css`
      font-weight: 800;
    `}
  `;

  return <Typography>{children}</Typography>;
};

export default Typography;

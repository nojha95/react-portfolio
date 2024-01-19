import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Typography from "../Typography/Typography";
import { CardVariant } from "../../models/models";

interface Props extends PropsWithChildren {
  variant: CardVariant;
  image: string;
  text: string;
}

const SkillCard = ({ text, image, variant = "outlined" }: Props) => {
  const SkillCardDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 12.625rem;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 2px solid var(--Primary-Black, #000);
    -webkit-text-fill-color: "#050";

    ${variant === "outlined" &&
    css`
      background: #fff;
      -webkit-text-fill-color: #000;
    `}

    ${variant === "solid" &&
    css`
      background: #000;
      -webkit-text-fill-color: #fff;
    `}
  `;

  const CardIcon = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    ${variant === "outlined" &&
    css`
      background-color: #fff;
    `}

    ${variant === "solid" &&
    css`
      color: #fff;
    `}
  `;

  return (
    <SkillCardDiv>
      <CardIcon src={image} />
      <Typography variant="h5" type="bold">
        {text}
      </Typography>
    </SkillCardDiv>
  );
};

export default SkillCard;

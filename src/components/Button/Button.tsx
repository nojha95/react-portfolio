import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  size: "small" | "medium";
  variant: "solid" | "outlined";
}

const Button = ({
  onClick,
  size = "medium",
  variant = "solid",
  children,
}: Props) => {
  const ButtonContainer = styled.div`
    display: flex;
    height: ${size === "small" ? "3rem" : "3.5rem"};
    padding: ${size === "small" ? "0.75rem 1rem " : "1rem 1.25rem"};
    font-family: "Arial", sans-serif;
    border-radius: 0.25rem;
    cursor: pointer;

    ${variant === "outlined" &&
    css`
      border: 2px solid #000;
      color: #000;
      border-color: #000;
    `}

    ${variant === "solid" &&
    css`
      background: #000;
    `}
  `;

  const StyledButton = styled.button`
    font-size: ${size === "small" ? "1rem" : "1.25rem"};
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    gap: 0.5rem;
    display: flex;
    font-style: normal;
    font-weight: 600;
    line-height: ${size === "small" ? "1.25rem" : "1.5rem"};
    letter-spacing: 0.025rem;
    color: ${variant === "solid" ? "#fff" : "000"};
  `;

  return (
    <ButtonContainer className="hover:scale-110">
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;

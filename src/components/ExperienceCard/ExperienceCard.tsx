import Typography from "../Typography/Typography";
import styled from "styled-components";
import { Experience } from "../../models/models";

interface Props {
  experience: Experience;
  variant?: "light" | "dark";
}

const ExperienceCard = ({ experience, variant = "dark" }: Props) => {
  const ExperienceCardDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 1.875rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;
    border-radius: 0.625rem;
    border: 1px solid var(--Zinc-500, #71717a);
    background-color: ${variant == "dark" ? "inherit" : "#27272A"};
  `;

  return (
    <ExperienceCardDiv>
      <div className="flex w-full l:flex-row xl:flex-row flex-col gap-1 justify-between">
        <div>
          <Typography color="white" type="semiBold">
            {experience.designation}
          </Typography>
        </div>
        <div>
          <Typography color="white" type="semiBold">
            {experience.period}
          </Typography>
        </div>
      </div>
      <Typography color="#D4D4D8">{experience.discription}</Typography>
    </ExperienceCardDiv>
  );
};

export default ExperienceCard;

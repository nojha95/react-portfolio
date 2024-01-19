export type CardVariant = "outlined" | "solid";

export type Skill = {
  name: string;
  icon: string;
  variant: CardVariant;
};

export type Experience = {
  designation: string;
  period: string;
  discription: string;
};

export type Project = {
  title: string;
  description: string;
};

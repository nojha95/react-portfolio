import python_icon from "../../assets/python.svg";
import react_icon from "../../assets/react.svg";
import git_icon from "../../assets/git.svg";
import ts_icon from "../../assets/typescript.svg";
import azure_icon from "../../assets/azure.svg";
import flask_icon from "../../assets/flask.svg";
import docker_icon from "../../assets/docker.svg";
import sql_icon from "../../assets/sql.svg";

import { Skill } from "../../models/models";

export const skills: Skill[] = [
  {
    name: "Python",
    icon: python_icon,
    variant: "outlined",
  },
  {
    name: "React",
    icon: react_icon,
    variant: "outlined",
  },
  {
    name: "Git",
    icon: git_icon,
    variant: "outlined",
  },
  {
    name: "Typescript",
    icon: ts_icon,
    variant: "solid",
  },
  {
    name: "Azure Cloud",
    icon: azure_icon,
    variant: "outlined",
  },
  {
    name: "Flask",
    icon: flask_icon,
    variant: "outlined",
  },
  {
    name: "Docker",
    icon: docker_icon,
    variant: "outlined",
  },
  {
    name: "SQL",
    icon: sql_icon,
    variant: "outlined",
  },
];

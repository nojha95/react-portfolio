import Typography from "../Typography/Typography";
import { Project } from "../../models/models";
import immi from "../../assets/proj.jpg";
interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div className="flex py-5 w-full">
      <div className="grid grid-cols-2 items-center">
        <div
          className={`flex flex-col gap-8 ${
            index % 2 ? "order-1 mr-20" : "order-2 ml-20"
          }`}
        >
          <Typography variant="h2" type="bold" color="white">
            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
          </Typography>
          <Typography type="bold" color="white">
            {project.title}
          </Typography>
          <Typography variant="p2" color="white">
            {project.description}
          </Typography>
        </div>
        <div
          className={`max-h-[20rem]  mt-10 overflow-clip rounded-md ${
            index % 2 ? "order-2 ml-20" : "order-1 mr-20"
          } `}
        >
          <img src={immi} className=""></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

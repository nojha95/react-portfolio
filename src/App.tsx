import "./App.css";
import Header from "./components/Header/Header";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";
import SkillCard from "./components/SkillCard/SkillCard";

import developer from "./assets/developer.svg";
import linkdin from "./assets/linkdin.svg";
import github from "./assets/github.svg";
import { skills } from "./components/Skills/Skills";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import { Experiences } from "./components/Skills/Experiences";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { projects } from "./components/Skills/Projects";
function App() {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-[100vh] px-20 py-[3.75rem] bg-white items-start">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-12 lg:w-[100%] mx-auto lg:h-[100%]">
          <div className="flex w-full lg:w-[38rem] py-5 px-4 flex-col items-center lg:items-start lg:gap-12 lg:mr-[4rem]">
            <Typography variant="h1" type="regular">
              Hello, I am{" "}
              <Typography variant="h1" type="bold">
                Nikhil Ojha. Fullstack Developer{" "}
                <Typography variant="h1" type="regular">
                  Based in{" "}
                </Typography>
                <Typography variant="h1" type="bold">
                  India
                </Typography>
              </Typography>{" "}
            </Typography>
            <div className="lg:m-0 my-8">
              <Typography variant="p2">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </Typography>
            </div>
            <div className="flex w-full py-1 items-start gap-8">
              <Button size="small" variant="outlined">
                <img src={linkdin}></img>
              </Button>
              <Button size="small" variant="outlined">
                <img src={github}></img>
              </Button>
            </div>
          </div>

          <img
            src={developer}
            alt="Developer"
            className="w-full lg:w-[35%] mt-6 lg:mt-0 "
          />
        </div>
      </div>{" "}
      <div className="flex w-full min-h-[100vh]  px-20 py-10 flex-col justify-center items-center bg-black">
        <div className="mx-auto mb-6">
          <Typography variant="h2" type="semiBold" color="#fff">
            My Experience
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          {Experiences.map((Experience, key) => (
            <ExperienceCard
              key={key}
              experience={Experience}
              variant={key % 2 ? "light" : "dark"}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full min-h-[100vh]  px-20 py-10  flex-col justify-center items-center">
        <div className="flex w-full px-8 flex-col items-start gap-5">
          <div className="mx-auto mb-6">
            <Typography variant="h2" type="semiBold">
              My Skills
            </Typography>
          </div>
          <div className="w-full mx-auto">
            <div className="grid  lg:grid-cols-5 lg:gap-16 md:grid-cols-3 md:gap-8 sm:grid-cols-2 sm:gap-8 ">
              {skills.map((data, key) => (
                <SkillCard
                  key={key}
                  variant={data.variant}
                  image={data.icon}
                  text={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full min-h-[100vh]  px-20 py-10  flex-col justify-center items-center bg-black">
        <div className="mx-auto mb-6">
          <Typography variant="h2" type="semiBold" color="#fff">
            My Projects
          </Typography>
        </div>
        <div className="mx-4">
          {projects.map((project, key) => (
            <ProjectCard key={key} index={key} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

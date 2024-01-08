import person from "../../assets/person.svg";
import download from "../../assets/download.svg";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const Header = () => {
  return (
    <div className="flex w-screen px-16 py-4 items-start ">
      <div className="flex py-0 px-8 w-full justify-between items-center shrink-0 bg-white ">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10">{/* <img src={person} /> */}</div>
          <Typography>Nikhil Ojha</Typography>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Typography variant="h5" type="bold">
            About Me
          </Typography>
          <Typography> Skills</Typography>
          <Typography> Project</Typography>
          <Typography> Contact Me</Typography>
        </div>
        <Button variant="solid" size="small">
          Resume
          <img src={download} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

import download from "../../assets/download.svg";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const Header = () => {
  return (
    <div className="flex flex-col w-full px-4 py-2 lg:px-16 lg:py-2 items-center">
      <div className="flex py-2 px-4 w-full justify-between items-center bg-white">
        {/* <div className="flex items-center gap-3">
          <Typography>Nikhil Ojha</Typography>
        </div> */}
        <div className="hidden w-full lg:flex justify-center items-center gap-8">
          <Typography variant="h5" type="bold">
            About Me
          </Typography>
          <Typography>Skills</Typography>
          <Typography>Projects</Typography>
          <Typography>Contact Me</Typography>
        </div>
        <div className="lg:hidden">
          {/* Add a responsive menu button/icon for mobile view */}
          <Typography variant="h5" type="bold">
            ☰
          </Typography>
        </div>
        <Button variant="solid" size="small">
          Resume
          <img src={download} alt="Download Icon" />
        </Button>
      </div>

      {/* Responsive navigation menu for small screens */}
      <div className="lg:hidden flex flex-col items-center gap-2 mt-4">
        <Typography variant="h5" type="bold">
          About Me
        </Typography>
        <Typography>Skills</Typography>
        <Typography>Projects</Typography>
        <Typography>Contact Me</Typography>
      </div>
    </div>
  );
};

export default Header;

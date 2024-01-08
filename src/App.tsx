import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Typography from "./components/Typography/Typography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex w-full px-20 py-[3.75rem] bg-white items-start">
        <div className="flex py-0 px-8 justify-between items-center shrink-0 w-full bg-white">
          <div className="flex w-[37.5rem] py-5 px-0 flex-col items-start gap-12 shrink-0">
            <Typography variant="h1" type="regular">
              {" "}
              Hello I am{" "}
              <Typography variant="h1" type="bold">
                Nikhil Ojha Fullstack Developer based in India
              </Typography>{" "}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

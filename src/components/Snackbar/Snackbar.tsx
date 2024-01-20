import React from "react";
import * as Toast from "@radix-ui/react-toast";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
}

const Snackbar = ({ open, setOpen, description }: Props) => {
  return (
    <>
      <Toast.Provider swipeDirection="left">
        <Toast.Root open={open} duration={2000} onOpenChange={setOpen}>
          <Toast.Description className="text-zinc-800 font-mono">
            {description}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport
          className={`fixed -bottom-6 right-0 z-50 outline m-4 p-4 rounded-md bg-zinc-200 transition-transform transform ${
            open ? "-translate-y-6 " : "translate-y-full"
          }`}
        />
      </Toast.Provider>
    </>
  );
};

export default Snackbar;

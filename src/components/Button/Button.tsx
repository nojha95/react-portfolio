import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  size?: "small" | "medium";
  variant?: "solid" | "outlined";
}

const Button = ({
  onClick,
  size = "medium",
  variant = "solid",
  children,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={` flex rounded font-sans  hover:scale-110 cursor-pointer 
      ${size === "small" ? "py-3 px-4" : "py-4 px-5"}
      ${
        variant === "solid"
          ? "bg-black text-white"
          : "border-solid border-2 border-black"
      } 
      `}
    >
      <button
        className={` ${
          size === "small" ? "text-sm" : "text-lg"
        } items-center justify-center shrink-0 gap-2 flex font-semibold -tracking-tight`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

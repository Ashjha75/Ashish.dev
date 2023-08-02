import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../ThemeContextProvider";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`delay-300 h-screen  ${isDark ? "bg-blue-700" : "bg-blue-50"}`}
    >
      <div
        className={`float-right mr-0   ${isDark ? "circle" : "circle2"}`}
      ></div>

      <div
        className="transition-transform transform float-right mx-10 my-5 text-black cursor-pointer  "
        onClick={toggleTheme}
        style={{ transform: isDark ? "rotate(260deg) " : "rotate(0deg)" }}
      >
        {isDark ? (
          <BsFillMoonStarsFill className="scale-150  " />
        ) : (
          <BsFillSunFill className="scale-150  " />
        )}
      </div>
    </div>
  );
};

export default Header;

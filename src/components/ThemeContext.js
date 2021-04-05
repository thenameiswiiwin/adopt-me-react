import { createContext } from "react";

const ThemeContext = createContext(
  /*
   * Should create a default value here
   * default value that we expect to never be called
   * do an Empty function, because second thing in a hook is a function
   * For TypeScript
   */
  ["#252525", function () {}]
);

export default ThemeContext;

import { render } from "react-dom";
import Pet from "./Pet";

/*
 * WORK THE SAME AS BELOW

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sadie",
      animal: "Dog",
      breed: "Shepherd Chow Mix",
    }),
    React.createElement(Pet, {
      name: "Offie",
      animal: "Cat",
      breed: "Maine Coon Mix",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};
*/

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Sadie" animal="Dog" breed="Shepherd Chow Mix" />
      <Pet name="Offie" animal="Cat" breed="Maine Coon Mix" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

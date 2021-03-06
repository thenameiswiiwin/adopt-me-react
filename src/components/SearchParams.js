import { useState, useEffect, useContext } from "react";
import Location from "./Location";
import Animal from "./Animal";
import Breed from "./Breed";
import Theme from "./Theme";
import ButtonSearchParam from "./ButtonSearchParam";
import ThemeContext from "./ThemeContext";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";

const SearchParams = ({ COLORS }) => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [themeHook, setThemeHook] = useContext(ThemeContext);

  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <Location
          text="location"
          location={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Animal
          text="animal"
          animal={animal}
          ANIMALS={ANIMALS}
          onChange={(e) => setAnimal(e.target.value)}
        />
        <Breed
          text="breed"
          breed={breed}
          breeds={breeds}
          onChange={(e) => setBreed(e.target.value)}
        />
        <Theme
          text="theme"
          themeHook={themeHook}
          COLORS={COLORS}
          onChange={(e) => setThemeHook(e.target.value)}
        />
        <ButtonSearchParam themeHook={themeHook} />
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

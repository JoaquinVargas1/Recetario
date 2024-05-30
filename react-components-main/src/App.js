import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap/";
import RecipeCard from "./Components/RecipeCard.js";
import Buscador from "./Components/Buscador.js";
import Encabezado from "./Components/Encabezado.js";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.meals);
        setRecipeList(data.meals);
      });
  }, []);

  return (
    <div className="App">
      <Container>
      <Encabezado />
        <Buscador texto={"Buscar Receta"} />
        <ul>
          {recipeList.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { getRecipeData } from "../lib/fetchData";
import RecipeDetail from "./recipeDetail";
import IMG from "../assets/loading.svg";

export default function Recipe() {
  const [search, setSearch] = useState<string>();
  const [recipes, setRecipes] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  const fetchingRecipeData = async () => {
    if (!search) {
      setLoading(false);
      return;
    }
    const data: any = await getRecipeData(search);
    setLoading(false);

    if (data.length === 0) {
      setEmpty(true);
      setRecipes(null);
    } else {
      setRecipes(data);
    }
  };

  useEffect(() => {
    setEmpty(false);
    const timer = setTimeout(() => {
      fetchingRecipeData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <div className="text-2xl text-center">RECIPES</div>

      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Find Receipe ... e.g  Jollof Rice, Egg Rice, e.t.c "
          className="p-5 w-full outline-none"
          onKeyDown={() => setLoading(true)}
        />
      </div>

      {loading ? (
        <p>
          <img src={IMG} alt="loading" className="mx-auto" />
        </p>
      ) : (
        <div className="grid grid-cols-1">
          {recipes?.map((recipe: any, index: number) => (
            <RecipeDetail {...recipe} key={index} />
          ))}
        </div>
      )}

      {empty && <p className="text-center m-5">Sorry, no Recipe was found.</p>}
    </div>
  );
}

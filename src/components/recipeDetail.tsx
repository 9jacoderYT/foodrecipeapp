import { Description } from "@mui/icons-material";
import React, { useState } from "react";
import parse from "html-react-parser";

type RecipeProps = {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;
};
export default function RecipeDetail({
  title,
  ingredients,
  servings,
  instructions,
}: RecipeProps) {
  const [open, setOpen] = useState<boolean>(false);
  const parse = require("html-react-parser");

  const textIngredients = ingredients.split("|");
  const textInstructions = instructions.split(".");

  return (
    <div className="border-b-[1px] border-gray-500">
      <div className="flex m-2 text-xl italic text-gray-400 hover:text-black">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="capitalize hover:cursor-pointer flex-1 select-none"
        >
          {title}
        </div>

        <div className="italic">{servings}</div>
      </div>

      <div>
        {open && (
          <div className="p-3 bg-white">
            <p className="text-gray-600 italic underline">Ingredients</p>
            {textIngredients.map((ingredient: string, index: number) => (
              <p key={index}>{ingredient}</p>
            ))}
            <br />
            <p className="text-gray-600 italic underline">Instructions</p>
            {textInstructions.map((instruction: string, index: number) => (
              <p key={index}>{instruction}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
  },
};

export const getRecipeData = async (recipeName) => {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recipeName}`;

  let result;
  try {
    const response = await fetch(url, options);

    result = await response.text();
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }

  // the response we get is a json object, so we need to convert  it to an array with JSON parse
  return JSON.parse(result);
};

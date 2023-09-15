import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const landingLoader = async () => {
  const searchTearm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTearm}`);
  return { drinks: response.data.drinks, searchTearm };
};

const Landing = () => {
  const { drinks, searchTearm } = useLoaderData();
  console.log(drinks);
  console.log(drinks);
  return <div></div>;
};

export default Landing;

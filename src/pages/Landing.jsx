import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const landingLoader = async () => {
  const searchTearm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTearm}`);
  return { drinks: response.data.drinks, searchTearm };
};

const Landing = () => {
  const { drinks, searchTearm } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;

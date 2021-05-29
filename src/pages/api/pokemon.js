import { apibase } from "../../api";
import { pokedex } from "../../pokemon.json-master/pokedex";

export default (req, res) => {
  const listaPokemon = pokedex;
  res.status(200).json({
    listaPokemon: listaPokemon,
  });
};

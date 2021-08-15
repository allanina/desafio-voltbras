import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon/Pokemon";
import "./styles.css"


export const PokemonsContainer = () =>{
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: {first: 154}
  });

  return(
    <div className="pokemons_container">
      <p>Lista de pokemóns</p>
      <div className="pokemons">
        {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    </div>

  )
  
}

export default PokemonsContainer;
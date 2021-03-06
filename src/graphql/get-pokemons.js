import gql from "graphql-tag";


export const GET_POKEMONS = gql`
  query pokemons($first: Int!){
    pokemons(first: $first){
      id
      name
      image
      maxHP
      attacks{
        special{
          name
          damage
        }
      }
    }
  }
`

export default GET_POKEMONS;
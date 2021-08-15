import "./styles.css"

export function Pokemon({ pokemon }){
  return(
    <div className="card_pokemon">
      <div className="pokemon_image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      <div className="pokemon_info">
        <div className="pokemon_name">
          <p>{pokemon.name}</p>
        </div>
        <div className="pokemon_meta">
          <span>{pokemon.maxHP}</span>
          <span>{pokemon.maxCP}</span>
        </div>
        <div className="pokemon_types">
          <p>{pokemon.types}</p>
        </div>
      </div>
    </div>
  )
}
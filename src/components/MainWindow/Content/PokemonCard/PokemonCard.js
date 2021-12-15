import React, {useEffect} from "react";
import style from './PokemonCard.module.css'
import Image from "../../../common/Image/Image";

const PokemonCard = ({selectedCard}) => {
    return (
      <div>
          <div className={style.selectedCard}>
              <div className={style.image}><Image image={selectedCard.images.large}/></div>
              <div className={style.pokemonInfo}>
                  <div className={style.pokemonNames}>
                      <div><b>Pokemon name: </b>{selectedCard.name}</div>
                      <div><b>Supertype: </b>{selectedCard.supertype}</div>
                      <div><b>Types: </b>{selectedCard.types}</div>
                      <div><b>Subtypes: </b>{selectedCard.subtypes}</div>
                  </div>
                  <div className={style.pokemonSkills}>
                      <div><b>Attack damage: </b>{selectedCard?.attacks[0]?.damage}</div>
                      <div><b>Costs: </b>{selectedCard?.attacks[0]?.cost}</div>
                      <div><b>Hp: </b>{selectedCard?.hp}</div>
                      <div><b>Evolves from: </b>{selectedCard?.evolvesFrom}</div>
                  </div>
              </div>
          </div>
          <div className={style.description}>{selectedCard?.attacks.map((value) =>
            <div key={value.text}>{value.text}</div>)}</div>
      </div>
    )
}

export default PokemonCard
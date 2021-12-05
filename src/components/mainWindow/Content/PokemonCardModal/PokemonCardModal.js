import React, {useEffect} from "react";
import style from './PokemonCardModal.module.css'
import {connect} from "react-redux";

const PokemonCardModal = ({active, setActive, selectedCard}) => {
    return (
      <div onClick={() => setActive(false)}
           className={active ? `${style.pokemonCardModal} ${style.active}` : style.pokemonCardModal}>
          <div onClick={(event) => event.stopPropagation()} className={style.pokemonCardModal__content}>
              {selectedCard ?
                <div>
                    <div className={style.selectedCard}>
                        <div className={style.image}><img src={selectedCard.images.large}/></div>
                        <div>
                            <div className={style.pokemonInfo}>
                                <div><b>Pokemon name: </b>{selectedCard.name}</div>
                                <div><b>Supertype: </b>{selectedCard.supertype}</div>
                                <div><b>Types: </b>{selectedCard.types}</div>
                                <div><b>Subtypes: </b>{selectedCard.subtypes}</div>
                            </div>
                            <div className={style.pokemonSkills}>
                                <div><b>Attack damage: </b>{selectedCard.attacks[0].damage}</div>
                                <div><b>Costs: </b>{selectedCard.attacks[0].cost}</div>
                                <div><b>Hp: </b>{selectedCard.hp}</div>
                                <div><b>Evolves from: </b>{selectedCard.evolvesFrom}</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.description}>{selectedCard.attacks.map((value) => <div>{value.text}</div>)}</div>
                </div> : ''}

          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedCard: state.pokemon.selectedCard,
    }
}

export default connect(mapStateToProps, {})(PokemonCardModal)
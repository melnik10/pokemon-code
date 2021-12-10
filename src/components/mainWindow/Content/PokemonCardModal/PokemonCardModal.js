import React, {useEffect} from "react";
import style from './PokemonCardModal.module.css'
import {connect} from "react-redux";
import preloaderImage from "../../../../assets/images/Spinner-1s-200px.svg";

const PokemonCardModal = ({active, setActive, selectedCard}) => {
    debugger;
    let imageStyle = {
        width: '250px',
        height: '500px',
        flex: "1 1 70%",
        backgroundImage: `url(${selectedCard?.images?.large}),url(${preloaderImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
    }
    return (

      <div onClick={() => setActive(false)}
           className={active ? `${style.pokemonCardModal} ${style.active}` : style.pokemonCardModal}>
          <div onClick={(event) => event.stopPropagation()} className={active ? `${style.pokemonCardModal__content} ${style.active}` : style.pokemonCardModal__content}>
              {selectedCard ?
                <div>
                    <div className={style.selectedCard}>
                        <div style={imageStyle}></div>
                        <div>
                            <div className={style.pokemonInfo}>
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
                    <div className={style.description}>{selectedCard?.attacks.map((value) => <div>{value.text}</div>)}</div>
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
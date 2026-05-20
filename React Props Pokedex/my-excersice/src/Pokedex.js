
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon, exp, isWinner }) {

    return(

        <div>

            <div className="Pokedex">

                {
                    pokemon.map(p => (

                        <Pokecard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />

                    ))
                }

            </div>


            <h2>Total EXP: {exp}</h2>

            {isWinner && <h1>THIS HAND WINS!</h1>}

        </div>
    )
}

export default Pokedex;
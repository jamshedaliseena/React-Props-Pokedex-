import "./Pokecard.css";

function Pokecard({ id, name, type, exp }) {

    const img =
`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (

        <div className="Pokecard">

            <h3>{name}</h3>

            <img src={img} alt={name} />

            <p>Type: {type}</p>

            <p>EXP: {exp}</p>

        </div>
    )
}

export default Pokecard;


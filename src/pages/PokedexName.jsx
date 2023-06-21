import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import PokedexNameCard from "../components/Pokedex/PokedexNameCard";
import { DoesntExits } from "../components/Pokedex/DoesntExits";

const PokedexName = () => {
    // para acceder al name del path en el enrutador
    const { name } = useParams()

    // peticion dependiendo del nombre
    const url = ` https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokemon, getPokemonByName, hasError] = useFetch(url)

    useEffect(()=> {
        getPokemonByName()
    }, [name])

    return (
        <div>
            {
                hasError
                ? <DoesntExits/>
                : (
                    <PokedexNameCard pokemon={pokemon}/>
                )
            }
        </div>
    )
};

export default PokedexName;

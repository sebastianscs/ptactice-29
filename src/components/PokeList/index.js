import axios from 'axios'
import React, {Fragment, useState, useEffect} from 'react';
import '../PokeList/css/styles.css'
import SearchBox from '../SearchBox/Searchbox';
const PokeList = () => {
    const [pokemons, setPoke] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        
        const fetchPoke = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                const pokeDetails = await Promise.all(
                    response.data.results.map(async (pokemon) => {
                        const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                        return {
                            name: capitalizarPalabra(pokemon.name),
                            img: details.data.sprites.front_default
                        };
                    })
                );
                setPoke(pokeDetails);
                setFilteredPokemonList(pokeDetails);
            } catch (error) {
                setError(error);
            }
        }

        fetchPoke();
    }, []);
    
    const handleSearch = (searchTerm) => {
        const filteredList = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemonList(filteredList);
    };

    if (error) {
        return <p>Error al obtener los Pokémon: {error.message}</p>;
    }   

    return(
        <body>
            <h2>Pokemons</h2>
            <SearchBox onSearch={handleSearch} />
            <section className='poke-list'>
                {filteredPokemonList.map((poke,index) => {
                    const {name, img} = poke;
                    return(
                        <article key={index} className='item-poke'>

                            <img alt={`${name} image`} src={img} className='poster-img'/>
                            <h3>{name}</h3>
                        </article>
                    );
                    })};
            </section>
        </body>
      );
};
const capitalizarPalabra = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
};
export default PokeList;
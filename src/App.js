import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Pokemon from './component/Pokemon';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons,setPokemons] = useState([]);
  const [pokemonsInfo,setPokemonsInfo] = useState([]);


  const pokemonsMock = [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
  ]

  const pokemonsInfoMock = [
    {
      "sprites": {
        "others":{
          "official-artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
  },
  {
    "sprites": {
      "others":{
        "official-artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      }
    },
    "id":"1",
    "name":"bulbasaur"
},
]

  const fetchPokemons = ()=>{
    return fetch(
      'https://pokeapi.co/api/v2/pokemon',
      {
        method: 'GET'
      }
    );
  }

  const fetchCurrentPokemon = (url)=>{
    return fetch(
      url,
      {
        method: 'GET'
      }
    );
  }

  useEffect(()=>{
    let mounted = true
    fetchPokemons().then(
      response=>{
        if (mounted) 
          setPokemons(response.result)
      }
    );
    return () => mounted = false
  },[])

  useEffect(()=>{
    let mounted = true
    pokemons.map((pokemon)=>{
      fetchCurrentPokemon(pokemon.url).then(
        response=>{
          if (mounted) 
            setPokemonsInfo(response.result)
        }
      );
    })
    return () => mounted = false
  },[pokemons])

  return (
    <div className="App">
      <Grid container spacing={2}>
        {/* {
          pokemons!==undefined?
          pokemons.map((pokemon)=>(
            <Grid item xs={12}>
            <Pokemon name={pokemon.name}/>
          </Grid>
          )):null
        } */}
        {
              pokemonsMock.map((pokemon)=>{
                const currentpk = pokemonsInfo.find(pokemonInfo=>pokemonInfo.name===pokemon.name)
                return (
    
                  <Grid item xs={12}>
                  <Pokemon name={pokemon.name} url={pokemon["currentpk.sprites.others.official-artwork"]}/>
                  </Grid>
                )
              })
        }
      </Grid>
    </div>
  );
}

export default App;

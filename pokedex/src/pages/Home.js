import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchPokemon } from '../api/getPokemonData';
import Search from '../components/Search';
import { Spinner, Alert } from 'react-bootstrap';
import DisplaySection from '../components/DisplaySection';

// const baseUrl = 'https://pokeapi.co/api/v2';
// const query = {
//   pokemon: 'pokemon'
// }

 const getPokemonImg = async (id) => {
    // const url = `${baseUrl}/${query.pokemon}/${pokemon}`;
    const url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

    let res;
    try {
      res = await getData(url);

      if (res?.data?.success) {
        console.log(res?.data?.success);

      } else {

        //   alert.success("Some Error Occurred");
      }
    } catch (error) {
      
      throw error;
    }
    return {res}
  };

const spinnerStyle = {
  width: '10rem',
  height: '10rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

const Home = () => {

 const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

   const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }
    }, 1500);
  }
        // useEffect(() => {
        //     getPokemonData();
        //     // getPokemon("BulbaSur");
        // },[]);
  return (
    <div>
      {error ? (<Alert variant='danger'>{errorMsg}</Alert>): null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <DisplaySection
          name={pokemon.name}
          sprite={pokemon.is_main_series}
          abilities={pokemon.region}
          stats={pokemon.version_groups}
          img={getPokemonImg(pokemon.id)}
           />
      ): null}
    </div>
  )
}

export default Home
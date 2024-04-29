import React, { useState, useEffect } from 'react';
import { Search } from '../components/Search';
import { Results } from '../components/Results';
import { NearCities } from '../components/NearCities';
import Grid from '@mui/material/Unstable_Grid2';
import { City } from '../../types/city';
import { getCities, getNearCities, search } from '../../services/cities';

export const SearchPage = () => {
  const [results, setResults] = useState<City[]>([]);
  const [nearCities, setNearCities] = useState<City[]>([]);

  const onSearch = (term: string) => {
    const results = search(term);
    setResults(results || []);
    setNearCities([]);
  }

  const onCityClick = (city: City) => {
    const results = getNearCities(city);
    setNearCities(results);
  }

  useEffect(() => {
    const cities = getCities();
    setResults(cities);
  }, []);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Search callback={onSearch} minChars={1} />
          <Results onCityClick={onCityClick} results={results} />
        </Grid>
        <Grid xs={4}>
          <NearCities results={nearCities} />
        </Grid>
      </Grid>
    </div>
  );
}
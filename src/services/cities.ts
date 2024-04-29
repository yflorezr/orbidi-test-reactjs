import { City } from "../types/city";
import cities from "../data/cities.json";
import * as geolib from "geolib";

export const getCities = () => {
  return cities;
};

export const search = (term: string) => {
  if (term) {
    return getCities().filter((city: City) => city.name.toLowerCase().includes(term.toLowerCase()));
  } else {
    return null;
  }
};

export const getNearCities = (selectedCity: City): City[] => {
  return geolib.orderByDistance(
    { latitude: selectedCity.lat, longitude: selectedCity.lng },
    cities.map((city: City) => ({
      lat: city.lat,
      lng: city.lng,
      name: city.name,
      country: city.country
    }))
  ).slice(1, 5) as City[];

}
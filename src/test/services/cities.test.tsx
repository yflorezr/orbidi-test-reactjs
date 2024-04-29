import { getCities, search, getNearCities } from "../../services/cities";
import { City } from "../../types/city";

describe("getCities", () => {
  it("should return the list of cities", () => {
    const cities = getCities();
    expect(Array.isArray(cities)).toBe(true);
    expect(cities.length).toBeGreaterThan(0);
  });
});

describe("search", () => {
  it("should return matching cities when a search term is provided", () => {
    const term = "New";
    const result = search(term);
    expect(Array.isArray(result)).toBe(true);
    expect(result).not.toBeNull();
    expect(result!.length).toBeGreaterThan(0);
    result!.forEach((city: City) => {
      expect(city.name.toLowerCase()).toContain(term.toLowerCase());
    });
  });

  it("should return null when no search term is provided", () => {
    const result = search("");
    expect(result).toBeNull();
  });
});

describe("getNearCities", () => {
  it("should return the nearest cities to the selected city", () => {
    const selectedCity: City = {
      name: "New York",
      country: "USA",
      lat: "40.7128",
      lng: "-74.0060"
    };
    const result = getNearCities(selectedCity);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(4);
    result.forEach((city: City) => {
      expect(city).toHaveProperty("name");
      expect(city).toHaveProperty("country");
      expect(city).toHaveProperty("lat");
      expect(city).toHaveProperty("lng");
    });
  });
});
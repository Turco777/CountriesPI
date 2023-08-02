import {
  GET_RELATION,
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_CONTINENT,
  ORDER_NAME,
  ORDER_POPULATION,
  POST_ACTIVITY,
  GET_ACTIVITIES,
} from "../redux/actions.js";

const initialState = {
  countries: [],
  countriesAux: [],
  allCountries: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RELATION: {
      //const countries = Array.isArray(action.payload) ? action.payload : [];
      console.log(action.payload, "Este es actiontype");
      return {
        ...state,
        countries: action.payload,
      };
    }

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesAux: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
        countriesAux: action.payload,
      };

    case FILTER_CONTINENT: {
      const filterByContinent = state.countriesAux.filter(
        (country) => country.continent === action.payload
      );

      if (action.payload === "0") {
        return { ...state, countries: state.countriesAux };
      } else {
        return { ...state, countries: filterByContinent };
      }
    }

    case ORDER_NAME: {
      const actualNameOrder = [...state.countries];
      if (action.payload === "A") {
        actualNameOrder.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else {
        actualNameOrder.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, countries: actualNameOrder };
    }

    case ORDER_POPULATION: {
      const actualPopOrder = [...state.countries];

      if (action.payload === "A") {
        actualPopOrder.sort((a, b) => {
          return a.population - b.population;
        });
      } else {
        actualPopOrder.sort((a, b) => {
          return b.population - a.population;
        });
      }
      return { ...state, countries: actualPopOrder };
    }

    case POST_ACTIVITY:
      return { ...state, activities: [...state.activities, action.payload] };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;

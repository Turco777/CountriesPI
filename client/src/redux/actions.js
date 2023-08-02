import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_RELATION = "GET_RELATION";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      return { error: error.message };
    }
  };
};

export const getCountryByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      const data = response.data;

      dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      return { error: error.message };
    }
  };
};

export const getCountriesByActivity = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries-by-activities/${id}`
      );
      return dispatch({
        type: GET_RELATION,
        payload: response.data.Countries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_NAME,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      window.alert("Activity Created");
      dispatch({
        type: POST_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      return { error: error.message };
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

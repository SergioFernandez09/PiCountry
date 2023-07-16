import { GET_ACTIVITIES, ADD_ACTIVITY, GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME } from "../Actions/actions-types";

const initialState = {
    countries: [],
    country: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
            return {
            ...state,
        countries: action.payload,
        };
        case GET_COUNTRY_BY_ID:
            return {
        ...state,
        country: action.payload,
      };
        case GET_COUNTRIES_BY_NAME:
            return {
            ...state,
        countries: action.payload,
          };

      default:
        return state;
    }
    
    

  };

export default rootReducer;
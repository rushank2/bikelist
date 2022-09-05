import {
  GET_BIKES,
  GET_BIKE,
  ADD_BIKE,
  DELETE_BIKE,
  CLEAR_BIKE,
  CLEAR_BIKES,
  BIKE_ERROR
} from '../actions/types';
import { transformErrors } from '../utils/transformErrors';

const initialState = {
  bike: null,
  bikes: [],
  loading: true,
  errors: {}
};

function bikeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BIKES:
      return {
        ...state,
        bikes: payload,
        loading: false,
        errors: {}
      };
    case GET_BIKE:
      return {
        ...state,
        bike: payload,
        loading: false,
        errors: {}
      };
    case ADD_BIKE:
      return {
        ...state,
        bikes: [...state.bikes, payload],
        loading: false
      };
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike._id !== payload),
        loading: false
      };
    case BIKE_ERROR:
      return {
        ...state,
        errors: transformErrors(payload),
        loading: false
      };
    case CLEAR_BIKE:
      return {
        ...state,
        bike: null
      };
    case CLEAR_BIKES:
      return {
        ...state,
        bikes: []
      };
    default:
      return state;
  }
}

export default bikeReducer;

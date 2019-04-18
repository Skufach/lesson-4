import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  countriesList: [],
  countryFetchingSuccess: false,
  countryFetching: false,
  // firstCountryCode: '',
  // secondCountryCode: '',
}

export const reducer = createReducer(
  {
    [actions.fetchingCountry]: state => ({
      ...state,
      countryFetching: true,
    }),
    [actions.fetchingCountryFail]: state => ({
      ...state,
      countryFetching: false,
      countryFetchingSuccess: false,
    }),
    [actions.fetchingCountrySuccess]: (state, payload) => ({
      ...state,
      countryFetching: false,
      countryFetchingSuccess: true,
      countriesList: payload,
    }),
    // [actions.changeFirstCountry]: (state, payload) => ({
    //   ...state,
    //   firstCountryCode: payload,
    // }),
    // [actions.changeSecondCountry]: (state, payload) => ({
    //   ...state,
    //   secondCountryCode: payload,
    // }),
  },
  initialState,
)

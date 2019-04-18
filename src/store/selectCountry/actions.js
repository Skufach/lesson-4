import { createAction } from 'redux-act'

export const countryStartTrigger = createAction('select/COUNTRY_START_TRIGGER')

export const fetchingCountry = createAction('select/FETCHING_COUNTRY')
export const fetchingCountrySuccess = createAction(
  'select/FETCHING_COUNTRY_SUCCESS',
)
export const fetchingCountryFail = createAction('select/FETCHING_COUNTRY_FAIL')

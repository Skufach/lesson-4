import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { SelectCountry } from './SelectCountry'

import {
  getCountriesList,
  getCountriesFetching,
  getCountryFetchingSuccess,
} from '@store/selectCountry/selectors'

import { countryStartTrigger } from '@store/selectCountry/actions'

import {
  changeFirstCountry,
  changeSecondCountry,
} from '@store/exchange/actions'

const mapStateToProps = state => ({
  countriesList: getCountriesList(state),
  countryFetching: getCountriesFetching(state),
  countryFetchingSuccess: getCountryFetchingSuccess(state),
})

export const SelectCountryContainer = connect(
  mapStateToProps,
  { push, countryStartTrigger, changeFirstCountry, changeSecondCountry },
)(SelectCountry)

import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import {
  getTerms,
  getFromTime,
  getToTime,
  getFromValue,
  getToValue,
  getFirstCountry,
  getSecondCountry,
} from '@store/exchange/selectors'
import { changeTerms, changeValuesTrigger } from '@store/exchange/actions'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  terms: getTerms(state),
  fromTime: getFromTime(state),
  toTime: getToTime(state),
  fromValue: getFromValue(state),
  toValue: getToValue(state),
  firstCountryName: getFirstCountry(state),
  secondCountryName: getSecondCountry(state),
})

export const ExchangeContainer = connect(
  mapStateToProps,
  {
    changeTerms,
    changeValuesTrigger,
    push,
  },
)(Exchange)

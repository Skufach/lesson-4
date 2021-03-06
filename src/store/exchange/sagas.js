import { takeEvery, select, put, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import * as actions from './actions'
import { getExchangeRate } from './selectors'

function* worker(action) {
  const { value, convertDirection } = action.payload
  const exchangeRate = yield select(getExchangeRate)
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return
  }
  if (convertDirection === 'from') {
    const fromValue = input.toString()
    const toValue = (Math.round(input * exchangeRate * 1000) / 1000).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))
  } else if (convertDirection === 'to') {
    const toValue = input.toString()
    const fromValue = (
      Math.round((input / exchangeRate) * 1000) / 1000
    ).toString()

    yield put(actions.changeFromValue(fromValue))
    yield put(actions.changeToValue(toValue))
  }

  console.log(action.type)
  if (action.type === actions.changeFirstCountry.toString()) {
    yield all([put(push('/exchange/select'))])
  }

  if (action.type == actions.changeSecondCountry.toString()) {
    yield all([put(push('/exchange/select'))])
  }
}

export function* exchangeWatcher() {
  yield takeEvery(actions.changeValuesTrigger.toString(), worker)
}

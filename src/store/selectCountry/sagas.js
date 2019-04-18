import { takeEvery, put, all, call, delay } from 'redux-saga/effects'

import * as actions from './actions'

function* worker() {
  yield put(actions.fetchingCountry())

  try {
    const { res } = yield all({
      res: call(fetch, `https://restcountries.eu/rest/v2/all`),
      latency: delay(2000),
    })

    const countries = yield call([res, res.json])

    if (res.status === 200) {
      yield put(actions.fetchingCountrySuccess(countries))
    } else {
      throw new Error('error')
    }
  } catch (e) {
    console.warn(e)
    yield put(actions.fetchingCountryFail())
  }
}

export function* selectCountryWatcher() {
  yield takeEvery(actions.countryStartTrigger.toString(), worker)
}

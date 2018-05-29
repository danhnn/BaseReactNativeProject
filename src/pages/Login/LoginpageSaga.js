import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import {AxiosClient} from '@network';

function* loginWatchWorker(action) {
  try {
    let { username, password } = action.payload;
    yield put({ type: 'LOGIN_SHOW_LOADING', payload: true })
    yield delay(2000);

    const result = yield AxiosClient.post('/authenticate/email', {
      username,
      password
    })

    yield put({ type: 'LOGIN_SHOW_LOADING', payload: false })
    yield delay(200)
    yield put({ type: 'NAV_HOME' })

  } catch (error) {
    // const errorMessage = error.response.data.errors.cridentials.message;
    console.log(error);
    yield put({ type: 'LOGIN_SHOW_LOADING', payload: false })
  }
}

export default function* watch() {
  yield takeEvery("LOGIN_ACTION", loginWatchWorker);
}
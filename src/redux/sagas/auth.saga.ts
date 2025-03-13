import { call, put, takeLatest } from 'redux-saga/effects';
import { CONFIG } from 'src/config';
import { authService } from 'src/services/auth.service';
import { 
  AUTH_ACTION_TYPES, 
  LoginPayload, 
  LoginResponse, 
  User,
  getMeSuccess,
  getMeFailure,
  loginSuccess,
  loginFailure,
} from '../types/auth.types';

interface LoginAction {
  type: typeof AUTH_ACTION_TYPES.LOGIN_REQUEST;
  payload: LoginPayload;
}

function* loginSaga(action: LoginAction): Generator<any, void, any> {
  try {
    const response = yield call(authService.login, action.payload);
    
    if (!CONFIG.isProduction) {
      console.log('Login saga response:', response);
    }

    yield put(loginSuccess(response));

    // After successful login, get user info
    try {
      const userInfo: User = yield call(authService.getMe);
      yield put(getMeSuccess(userInfo));
    } catch (error) {
      yield put(getMeFailure(error instanceof Error ? error.message : 'Failed to get user info'));
    }
  } catch (error) {
    if (!CONFIG.isProduction) {
      console.error('Login saga error:', error);
    }

    yield put(loginFailure(error instanceof Error ? error.message : 'Login failed'));
  }
}

function* getMeSaga(): Generator<any, void, User> {
  try {
    const userInfo: User = yield call(authService.getMe);
    yield put(getMeSuccess(userInfo));
  } catch (error) {
    yield put(getMeFailure(error instanceof Error ? error.message : 'Failed to get user info'));
  }
}

export function* watchAuth(): Generator {
  yield takeLatest(AUTH_ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(AUTH_ACTION_TYPES.GET_ME_REQUEST, getMeSaga);
} 
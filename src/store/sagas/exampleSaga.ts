import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataRequest, fetchDataSuccess } from "../slices/exampleSlice";

function fetchDataAPI(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data from API!"), 1000)
  );
}

function* fetchDataSaga() {
  try {
    const data: string = yield call(fetchDataAPI);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default function* exampleSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}

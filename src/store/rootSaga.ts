import { all } from "redux-saga/effects";
import exampleSaga from "./sagas/exampleSaga";

export default function* rootSaga() {
  yield all([exampleSaga()]);
}

"use client";

import { Provider } from "react-redux";
import store from "./store";
import {persistor} from './store';
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{children}</Provider>;
    </PersistGate>
  )
}

import { configureStore } from "@reduxjs/toolkit";
import { InjectedReducersType } from "@/utils/types/injector-typings";
import { createReducer } from "./reducer";

export default function createConfigureStore(reducers?: InjectedReducersType) {
  const store = configureStore({
    reducer: createReducer(reducers),
  });
  return store;
}

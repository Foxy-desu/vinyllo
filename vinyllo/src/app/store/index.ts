import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user_slice";

const appReducers = combineReducers({
    user: userReducer,
})

const store = configureStore({
    reducer: appReducers,
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
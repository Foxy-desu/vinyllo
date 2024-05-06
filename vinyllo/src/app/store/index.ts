import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user_slice";

const appReducers = combineReducers({
    user: userReducer,
})

const store = configureStore({
    reducer: appReducers,
});

export default store;
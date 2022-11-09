import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./reducers/tokenSlice";
const store = configureStore({
    reducer: {
        token: tokenSlice,
    },
    middleware: (getDefalutMiddelware) =>
        getDefalutMiddelware({
            serializableCheck: false,
        }),
});

export default store;
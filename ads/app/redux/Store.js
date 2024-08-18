
import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./ImageSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            imageSlice: imageSlice,
        },
    });
}

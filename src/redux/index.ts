import { configureStore } from "@reduxjs/toolkit";
import NotificationSlice from "./slices/NotificationSlice";
import userReducer from './slices/UserSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        notification: NotificationSlice
    }
})
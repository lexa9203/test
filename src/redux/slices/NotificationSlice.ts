import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notification: false,
    messageNotification: '',
    color: ''
}

const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.notification = action.payload.notification;
            state.messageNotification = action.payload.messageNotification;
            state.color = action.payload.color;
        },
        hideNotification: (state) => {
            state.notification = false;
            state.messageNotification = '';
            state.color = '';
        }
    }
})

export const {showNotification, hideNotification} = NotificationSlice.actions;

export default NotificationSlice.reducer;

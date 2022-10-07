import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    password: ''
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.name = '';
            state.password = '';
        },
    }
})

export const {login, logout} = UserSlice.actions;

export default UserSlice.reducer;

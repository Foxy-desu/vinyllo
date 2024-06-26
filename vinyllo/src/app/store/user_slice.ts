import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//TODO: implement rtk query for user fetching data
export type TUserState = {email:string, id:number} | null | undefined; 
export const loginUser: any = createAsyncThunk(
    'login',
    async(userCredentials)=> {
        const request = await axios.post('http://localhost:3000/login', userCredentials);
        const response = await request.data;
        localStorage.setItem('userToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify({email: response.user.email, id: response.user.id}));
        return response;
    }
);
export const registerUser: any = createAsyncThunk(
    'register',
    async(userCredentials)=> {
        const request = await axios.post('http://localhost:3000/register', userCredentials);
        const response = await request.data;
        localStorage.setItem('userToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify({email: response.user.email, id: response.user.id}));
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        logOut(state) {
            if (state.user) {
                state.user = null;
            }
        },
        setUserOnReload(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.pending, (state)=> {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.loading = false;
            state.user = action.payload.user;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            if(action.error.message === 'Request failed with status code 401') {
                state.error = 'Access denied. Please enter valid user credentials' as any;
            }
            if(action.error.message === 'Request failed with status code 400') {
                state.error = 'Please, check if all credentials are correct and retry' as any;
            }
            else {
                state.error = action.error.message as any;
            }
        })
        .addCase(registerUser.pending, (state)=> {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action)=> {
            state.loading = false;
            state.user = action.payload.user;
            state.error = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            if(action.error.message === 'Request failed with status code 401') {
                state.error = 'Access denied. Please enter valid user credentials' as any;
            }
            if(action.error.message === 'Request failed with status code 400') {
                state.error = 'User already exists' as any;
            }
            else {
                state.error = action.error.message as any;
            }
        })
    }
});

export const {logOut, setUserOnReload} = userSlice.actions;
export default userSlice.reducer;
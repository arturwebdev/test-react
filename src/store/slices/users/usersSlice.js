import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersApi";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: {}
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            if(state.data.some(el => 
                (el.email === payload.login || 
                el.username === payload.login) && 
                payload.password === el.password))
                {
                    return {
                        ...state,
                        currentUser: state.data.find(el => 
                            (el.email === payload.login || 
                            el.username === payload.login) && 
                            payload.password === el.password)
                    }
                }
                return state
             
        },
        logout(state, {payload}){
            return {
                ...state,
                currentUser: {}
            }
        }
        
    },

    extraReducers: {
        [fetchUsers.pending]: (state, {payload}) => {
        },
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: payload
            }
        },
        [fetchUsers.rejected]: (state, {payload}) => {
            console.log('error');
        }
    }
})

export const selectUsers = (state) => state.users

export const usersReducer = usersSlice.reducer 

export const { toggleCurrentUser, logout } = usersSlice.actions

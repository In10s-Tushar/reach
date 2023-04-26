import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../lib/interfaces/user"

export type PageState = {
    loggedInUserInfo: IUser | null
    isLoggedIn: boolean
}

const initialState: PageState = {
    loggedInUserInfo: null,
    isLoggedIn: false
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        resetMainSlice: () => initialState,
        updateLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    },
})

export const {
    resetMainSlice,
    updateLoggedIn
} = mainSlice.actions

export default mainSlice.reducer
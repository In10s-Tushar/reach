import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../lib/interfaces/user'
import { getUserInfo } from '../services/main'

export type PageState = {
  loggedInUserInfo: IUser | null
  isLoggedIn: boolean
  loaderCount: number
}

const initialState: PageState = {
  loggedInUserInfo: null,
  isLoggedIn: false,
  loaderCount: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resetMainSlice: () => initialState,
    updateLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    addLoader: (state) => {
      state.loaderCount += 1
    },
    removeLoader: (state) => {
      if (state.loaderCount > 0) state.loaderCount -= 1
    },
    resetLoader: (state) => {
      state.loaderCount = 0
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loggedInUserInfo = action.payload
    })
  },
})

export const { resetMainSlice, updateLoggedIn, addLoader, removeLoader, resetLoader } =
  mainSlice.actions

export default mainSlice.reducer

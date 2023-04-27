import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../lib/http";
import { crypt } from "../../lib/utils";
import { addLoader, removeLoader, resetMainSlice, updateLoggedIn } from "../slices/mainSlice";
import { ILoginPayload } from "../../lib/interfaces/user";
import { resetDashboardSlice } from "../slices/dashboardSlice";

export const loginUser = createAsyncThunk(
  'main/loginUser',
  async ({ data, cb }: { data: ILoginPayload, cb: (status: boolean) => void }, { dispatch }) => {
    try {
      data.password = btoa(crypt('in!)s', data.password))
      dispatch(addLoader())
      const response = await http.put('/api/v1/entrance/login', data)
      if (response.status === 200) {
        dispatch(updateLoggedIn(true))
        dispatch(removeLoader())
        cb(true)
        return true
      }
      cb(false)
    } catch (error) {
      cb(false)
    }
    dispatch(removeLoader())
    return false
  }
)

export const logoutUser = createAsyncThunk(
  'main/logoutUser',
  async (_, { dispatch }) => {
    dispatch(addLoader())
    try {
      await http.get('/api/v1/account/logout')
    } catch (error) {}
    dispatch(updateLoggedIn(false))
    // TODO: reset all the slice here
    dispatch(resetMainSlice())
    dispatch(resetDashboardSlice())
    dispatch(removeLoader())
  }
)

export const getUserInfo = createAsyncThunk(
  'main/getUserInfo',
  async (_, { dispatch }) => {
    try {
      dispatch(addLoader())
      const response = await http.get('/getUserInfo')
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        dispatch(removeLoader())
        return response.data
      }
    } catch (error) {}
    dispatch(removeLoader())
    return null
  }
)

// export const campaignCount = createAsyncThunk(
//   'main/campaignCount',
//   async ({data, cb}: {data:ICampaignCount, cb:(status:boolean)=>void}, { dispatch }) => {
//     try {
//       const response = await http.put('/dashboard/getCampaignCount', data)
//       if(response.status === 200){
//         dispatch(updateLoggedIn(true))
//         cb(true)
//         return true
//       }
//       cb(false)
//       return false
//     } catch (error) {
//       cb(false)
//       return false
//     }
//   }
// )
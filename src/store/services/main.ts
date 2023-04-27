import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../lib/http";
import { crypt } from "../../lib/utils";
import { updateLoggedIn } from "../slices/mainSlice";
import { ILoginPayload, ICampaignCount } from "../../lib/interfaces/user";

export const loginUser = createAsyncThunk(
  'main/loginUser',
  async ({data, cb}: {data:ILoginPayload, cb:(status:boolean)=>void}, { dispatch }) => {
    try {
      data.password = btoa(crypt('in!)s', data.password))
      const response = await http.put('/api/v1/entrance/login', data)
      if(response.status === 200){
        dispatch(updateLoggedIn(true))
        cb(true)
        return true
      }
      cb(false)
      return false
    } catch (error) {
      cb(false)
      return false
    }
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
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../lib/http";
import { logoutUser } from "./main";
import { setMasterFileCount, setTransactionalFileCount } from "../slices/dashboardSlice";
import { addLoader, removeLoader } from "../slices/mainSlice";

export const getFileCount = createAsyncThunk(
  'dashboard/getFileCount',
  async (data: { Data_Type: string, startDate: number, endDate: number }, { dispatch }) => {
    try {
      dispatch(addLoader())
      let token = await http.get('/csrfToken')
      token = token.data
      const response = await http.post('/files/getFileCount', { ...data, ...token })
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        if (data.Data_Type === 'M') {
          dispatch(setMasterFileCount(response.data))
        } else if (data.Data_Type === 'T') {
          dispatch(setTransactionalFileCount(response.data))
        }
      }
    } catch (error) { }
    dispatch(removeLoader())
    return null
  }
)


export const getSMSStats = createAsyncThunk(
  'dashboard/getSMSStats',
  async (params: { startDateTime: string, endDateTime: string, getCount: boolean }, { dispatch }) => {
    try {
      dispatch(addLoader())
      const response = await http.get('/camp/getSMSStats', { params })
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        dispatch(removeLoader())
        return response.data
      }
    } catch (error) { }
    dispatch(removeLoader())
    return null
  }
)

export const getEmailStats = createAsyncThunk(
  'dashboard/getEmailStats',
  async (params: { startDateTime: string, endDateTime: string }, { dispatch }) => {
    try {
      dispatch(addLoader())
      const response = await http.get('/dashboard/getEmailStats', { params })
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        dispatch(removeLoader())
        return response.data
      }
    } catch (error) { }
    dispatch(removeLoader())
    return null
  }
)
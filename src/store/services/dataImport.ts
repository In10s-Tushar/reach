import { createAsyncThunk } from '@reduxjs/toolkit'
import { addLoader, removeLoader } from '../slices/mainSlice'
import http from '../../lib/http'
import { logoutUser } from './main'

export const getSettings = createAsyncThunk('dataImport/getSettings', async (_, { dispatch }) => {
  try {
    dispatch(addLoader())
    let token = await http.get('/csrfToken')
    token = token.data
    const response = await http.post('/settings/get', {
      ...token,
    })
    if (response.status === 401) {
      dispatch(logoutUser())
    } else if (response.status === 200) {
      dispatch(removeLoader())
      return response.data
    }
  } catch (error) {
    // console.log(error)
  }
  dispatch(removeLoader())
  return null
})

export const getMasterData = createAsyncThunk(
  'dataImport/getMasterData',
  async (
    data: {
      ConsumerNo: number
      startDate: string
      endDate: string
      limit: number
      page: number
      tableName: string
    },
    { dispatch },
  ) => {
    try {
      dispatch(addLoader())
      let token = await http.get('/csrfToken')
      token = token.data
      const response = await http.post('/files/getMasterData', {
        ...data,
        ...token,
      })
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        dispatch(removeLoader())
        return response.data
      }
    } catch (error) {
      // console.log(error)
    }
    dispatch(removeLoader())
    return null
  },
)

export const getTransactionalData = createAsyncThunk(
  'dataImport/getTransactionalData',
  async (
    data: {
      ConsumerNo: number
      startDate: string
      endDate: string
      limit: number
      page: number
      transType: string
    },
    { dispatch },
  ) => {
    try {
      dispatch(addLoader())
      let token = await http.get('/csrfToken')
      token = token.data
      const response = await http.post('/files/getTransData', {
        ...data,
        ...token,
      })
      if (response.status === 401) {
        dispatch(logoutUser())
      } else if (response.status === 200) {
        dispatch(removeLoader())
        return response.data
      }
    } catch (error) {
      // console.log(error)
    }
    dispatch(removeLoader())
    return null
  },
)

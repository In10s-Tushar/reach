import { createSlice } from '@reduxjs/toolkit'
import { getCampaignCount, getEmailStats, getSMSStats } from '../services/dashboard'
import {
  ICampaignCountResponse,
  IEmailStats,
  IFileCount,
  ISmsStats,
} from '../../lib/interfaces/dashboard'

export type PageState = {
  masterFileCount?: IFileCount
  transactionalFileCount?: IFileCount
  smsStats?: ISmsStats
  emailStats?: IEmailStats
  campaignCount?: ICampaignCountResponse
}

const initialState: PageState = {
  masterFileCount: undefined,
  transactionalFileCount: undefined,
  smsStats: undefined,
  emailStats: undefined,
  campaignCount: undefined,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDashboardSlice: () => initialState,
    setMasterFileCount: (state, action) => {
      state.masterFileCount = action.payload
    },
    setTransactionalFileCount: (state, action) => {
      state.transactionalFileCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSMSStats.fulfilled, (state, action) => {
        state.smsStats = action.payload
      })
      .addCase(getEmailStats.fulfilled, (state, action) => {
        state.emailStats = action.payload
      })
      .addCase(getCampaignCount.fulfilled, (state, action) => {
        state.campaignCount = action.payload
      })
  },
})

export const { resetDashboardSlice, setMasterFileCount, setTransactionalFileCount } =
  dashboardSlice.actions

export default dashboardSlice.reducer

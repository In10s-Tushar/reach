import { createSlice } from '@reduxjs/toolkit'
import { getMasterData, getSettings, getTransactionalData } from '../services/dataImport'
import { IMasterData, ISettingData, ITransactionalData } from '../../lib/interfaces/dataImport'

export type PageState = {
  settingData?: ISettingData
  masterData?: IMasterData
  transactionalData?: ITransactionalData
}

const initialState: PageState = {
  settingData: undefined,
  masterData: undefined,
  transactionalData: undefined,
}

export const dataImportSlice = createSlice({
  name: 'dataImport',
  initialState,
  reducers: {
    resetDataImportSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSettings.fulfilled, (state, action) => {
        state.settingData = action.payload
      })
      .addCase(getMasterData.fulfilled, (state, action) => {
        state.masterData = action.payload
      })
      .addCase(getTransactionalData.fulfilled, (state, action) => {
        state.transactionalData = action.payload
      })
  },
})

export const { resetDataImportSlice } = dataImportSlice.actions

export default dataImportSlice.reducer

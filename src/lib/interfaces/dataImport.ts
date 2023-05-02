export interface ISettingData {
  clientDB: string
  leftMasterTables: number
  leftPreferenceTables: number
  leftTransactionTables: number
  settings: Array<object>
}

export interface IMasterData {
  files: Array<object>
  total: number
}

export interface ITransactionalData {
  files: Array<object>
  total: number
}

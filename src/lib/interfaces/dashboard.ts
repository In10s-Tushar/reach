
export interface IFileCount {
  processedFiles: number
  skippedFiles: number
  totalFiles: number
}

export interface ISmsStats {
  distinctCount: number
  status: boolean
  totalSentCount: number
}

export interface IEmailStats {
  emailCampIds: Array<string>,
  campCicks: number,
  campDistinctClicks: number,
  unsCount: number,
  campStats: Array<any>,
  status: boolean
}
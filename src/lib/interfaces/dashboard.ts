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
  emailCampIds: Array<string>
  campCicks: number
  campDistinctClicks: number
  unsCount: number
  campStats: Array<any>
  status: boolean
}

export interface ICampaignCountResponse {
  appCustomerCount: number
  emailCampCount: number
  emailCustomerCount: number
  mobileNotificationCount: number
  sendStats: ISendStats
  smsCampCount: number
  smsCustomerCount: number
  status: boolean
  voiceCampCount: number
  voiceCustomerCount: number
  webCustomerCount: number
  webNotificationCount: number
  whatsappCampCount: number
  whatsappCampCustomerCount: number
}

interface ISendStats {
  emailDataDayWise: Array<{
    date: string
    sent: number
    open: number
    fail: number
    deliver: number
    campCicks: number
  }>
  emailTotalData: {
    allSent: number
    allOpen: number
    allFail: number
    allDeliver: number
    allClicks: number
  }
  smsDataDayWise: Array<{ date: string; total: number; success: number; fail: number }>
  smsTotalData: { allFail: number; allSuccess: number; allTotal: number }
}

export interface IUser {
  _id: string,
  fullName: string
}


export interface ILoginPayload {
  emailAddress: string
  password: string 
}

export interface ICampaignCount {
  startDate: string,
  endDate: string,
  getSmsStats:boolean,
  getEmailStats:boolean,
  getAllDayStats:boolean, 
}
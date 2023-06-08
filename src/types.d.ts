export interface ExpiredDate {
  month: string
  year: string
}

export interface CardInfo {
  numberCard: string
  namePerson: string
  expiredDate: ExpiredDate
  entity: string
}

export interface CVC {
  cvc: string
}

export interface CardInfoWithCVC extends CardInfo, CVC {}

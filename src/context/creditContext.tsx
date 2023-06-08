import { createContext, useState } from 'react'
import { type CardInfoWithCVC } from '../types'

interface CardContext {
  creditCard: CardInfoWithCVC
  setCreditCard: React.Dispatch<React.SetStateAction<CardInfoWithCVC>>
}

export const CreditCardContext = createContext<CardContext>({
  creditCard: {
    entity: '',
    expiredDate: {
      month: '',
      year: ''
    },
    cvc: '',
    numberCard: '',
    namePerson: ''
  },
  setCreditCard: () => {}
})

interface Props {
  children: React.ReactNode
}

export const CreditCardProvider: React.FC<Props> = ({ children }) => {
  const [creditCard, setCreditCard] = useState<CardInfoWithCVC>({
    entity: '',
    expiredDate: {
      month: '',
      year: ''
    },
    cvc: '',
    numberCard: '',
    namePerson: ''
  })

  return (
    <CreditCardContext.Provider value={{ creditCard, setCreditCard }}>{children}</CreditCardContext.Provider>
  )
}

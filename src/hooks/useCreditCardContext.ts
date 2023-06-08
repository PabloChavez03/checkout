import { useContext } from 'react'
import { CreditCardContext } from '../context/creditContext'

export function useCreditCardContext () {
  const context = useContext(CreditCardContext)
  if (context === undefined) {
    throw new Error('useCreditCardContext must be used within a CreditCardProvider')
  }

  return context
}

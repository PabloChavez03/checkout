import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useCreditCardContext } from '../hooks/useCreditCardContext'
import { type CardInfoWithCVC } from '../types'
import { onlyNumbers } from '../utils/utils'
import { Icons } from './icons/Icons'

// TODO: Faltan agregar los errores de los inputs

export const Form = () => {
  const { creditCard, setCreditCard } = useCreditCardContext()
  const { expiredDate, namePerson, numberCard, cvc } = creditCard
  const { month, year } = expiredDate

  const initialCardInfo: CardInfoWithCVC = {
    entity: '',
    expiredDate: {
      month: '',
      year: ''
    },
    namePerson: '',
    numberCard: '',
    cvc: ''
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<CardInfoWithCVC>(initialCardInfo)
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    if (!onlyNumbers({ str: numberCard })) {
      setError({
        ...error,
        numberCard: 'Wrong formant, only numbers'
      })
      return
    }

    if (cvc.length === 0) {
      setError({
        ...error,
        cvc: "Don't be blank"
      })
      return
    }

    setError(initialCardInfo)
  }, [creditCard])

  console.log(error)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name
    const value = evt.target.value

    if (name === 'month' || name === 'year') {
      setCreditCard({
        ...creditCard,
        expiredDate: {
          ...expiredDate,
          [name]: value
        }
      })
      return
    }

    setCreditCard({
      ...creditCard,
      [name]: value
    })
  }

  const hasErrors = Object.values(error).some(value => value.length > 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (!hasErrors) {
      setSubmit(true)
      setTimeout(() => {
        setCreditCard(initialCardInfo)
        setLoading(false)
        setSubmit(false)
      }, 2000)
    }
  }

  return (
    <form className="flex flex-col gap-6 px-8 [&>div>label]:font-bold [&>div>label]:text-indigo-900 [&>div>input]:outline-indigo-900" onSubmit={handleSubmit}>
    <div className="flex flex-col gap-2 grow">
      <label
        htmlFor="cardholder-name"
        className="text-sm tracking-widest"
      >
        CARDHOLDER NAME
      </label>
      <input
        type="text"
        id="cardholder-name"
        name="namePerson"
        value={namePerson}
        placeholder="e.g. John Doe"
        className="border-[1.5px] w-full px-4 py-2 rounded-md"
        onChange={handleChange}
      />
      {error.namePerson.length > 0 && (
        <p className="text-red-500 text-xs">{error.namePerson}</p>
      )}
    </div>

    <div className="flex flex-col gap-2 grow">
      <label htmlFor="card-number" className="text-sm tracking-widest">
        CARD NUMBER
      </label>
      <input
        type="text"
        id="card-number"
        name="numberCard"
        value={numberCard}
        inputMode='numeric'
        placeholder="e.g. 1234 5678 9123 4567"
        className="border-[1.5px] w-full px-4 py-2 rounded-md"
        maxLength={16}
        onChange={handleChange}
      />
      {error.numberCard.length > 0 && (
        <p className="text-red-500 text-xs">{error.numberCard}</p>
      )}
    </div>

    <div className="flex gap-2 [&>div>label]:font-bold [&>div>label]:text-indigo-900 [&>div>div>input]:outline-indigo-900">
      <div className="flex flex-col gap-2">
        <label htmlFor="expiration-date" className="text-sm tracking-widest">
          EXP. DATE (MM/YY)
        </label>
        <div className="inline-flex gap-2">
          <input
            type="text"
            id="expiration-date"
            name="month"
            value={month}
            placeholder="MM"
            onChange={handleChange}
            maxLength={2}
            className="border-[1.5px] w-[4.8rem] px-4 py-2 rounded-md"
          />
          <input
            type="text"
            id="expiration-date"
            name="year"
            value={year}
            placeholder="YY"
            onChange={handleChange}
            maxLength={2}
            className="border-[1.5px] w-[4.8rem] px-4 py-2 rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 grow">
        <label htmlFor="cvc" className="text-sm tracking-widest">
          CVC
        </label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          value={cvc}
          placeholder="e.g. 1234"
          maxLength={3}
          inputMode='numeric'
          onChange={handleChange}
          className="border-[1.5px] w-full px-4 py-2 rounded-md outline-indigo-900"
        />
      </div>
    </div>
    <button className={clsx('text-white py-3 rounded-md  hover:bg-indigo-900/90 transition-colors', {
      'bg-indigo-900': !submit,
      'bg-indigo-900/80': submit
    })}>{
      submit
        ? (
        <div className='flex justify-center'>
          <Icons.spin />
        </div>
          )
        : 'Submit'
    }</button>
  </form>
  )
}

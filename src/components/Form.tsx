import { useCreditCardContext } from '../hooks/useCreditCardContext'

export const Form = () => {
  const { creditCard, setCreditCard } = useCreditCardContext()
  const { expiredDate, namePerson, numberCard, cvc } = creditCard
  const { month, year } = expiredDate

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

  return (
    <form className="flex flex-col gap-6 px-8 [&>div>label]:font-bold [&>div>label]:text-indigo-900 [&>div>input]:outline-indigo-900">
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
    <button className='bg-indigo-900 text-white py-3 rounded-md hover:bg-indigo-900/90 transition-colors'>Confirm</button>
  </form>
  )
}

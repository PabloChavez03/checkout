import { useCreditCardContext } from '../hooks/useCreditCardContext'
import { separateString } from '../utils/utils'

export const CardFront = () => {
  const { creditCard } = useCreditCardContext()
  const { numberCard, namePerson, expiredDate, entity } = creditCard
  const { month, year } = expiredDate

  const newNumberCard = separateString({ str: numberCard, into: 4 })

  return (
    <article className="container mx-auto max-w-xs md:max-w-[520px] h-[180px] md:h-[250px] rounded-lg px-7 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-200 shadow-2xl">
      <article className="flex flex-col min-h-full justify-between">
        <span className='uppercase'>{entity.length > 0 ? entity : 'VISA'}</span>
        <article className="flex flex-col gap-2">
          <h2 className=" text-xl md:text-3xl uppercase tracking-wider">{newNumberCard.length > 0 ? newNumberCard : '0000 0000 0000 0000'}</h2>
          <div className="flex justify-between">
            <span className="uppercase text-xs md:text-base">{namePerson.length > 0 ? namePerson : 'John Doe'}</span>
            <div className="inline-flex items-center text-xs md:text-base">
              <span className='mx-[2px] w-[15px]'>{month.length > 0 ? month : '00'}</span>
              <span>/</span>
              <span className='mx-[2px] w-[15px]'>{year.length > 0 ? year : '00'}</span>
            </div>
          </div>
        </article>
      </article>
    </article>
  )
}

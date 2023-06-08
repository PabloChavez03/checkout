import { useCreditCardContext } from '../hooks/useCreditCardContext'

export const CardBack = () => {
  const { creditCard } = useCreditCardContext()
  const { cvc } = creditCard
  return (
    <article className="container relative flex flex-col justify-center items-center mx-auto max-w-xs md:max-w-[520px] h-[180px] md:h-[250px] rounded-lg bg-gradient-to-tl from-gray-400 via-gray-200 to-gray-50 text-gray-200">
      <div className="bg-gray-800 py-5 md:py-7 absolute top-4 md:top-7 left-0 right-0" />
      <div className="relative w-3/4 bg-gray-400/75 rounded-[5px]">
        <article className="flex justify-end py-1 md:py-2 px-6 md:px-10">
          <span className="text-base md:text-xl font-bold text-white">{cvc}</span>
        </article>
      </div>
    </article>
  )
}

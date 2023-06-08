interface Options {
  str: string
  into: number
}

export function filterNumbers ({ str }: { str: string }) {
  const filteredNumbers = Array.from(str).filter(el => {
    return !isNaN(Number(el))
  }).join('')

  return filteredNumbers
}

export function separateString ({ str = '', into = 0 }: Options) {
  return Array.from(str).map((el, index) => {
    if ((index + 1) % into === 0) {
      return el + ' '
    }
    return el
  })
}

export function onlyNumbers ({ str }: { str: string }) {
  const filteredNumbers = Array.from(str).every((el) => !isNaN(Number(el)))

  return filteredNumbers
}

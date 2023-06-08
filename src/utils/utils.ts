export function separateString (str: string, into: number) {
  return Array.from(str).map((el, index) => {
    if ((index + 1) % into === 0) {
      return el + ' '
    }
    return el
  })
}

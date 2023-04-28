export const crypt = (salt: string, text: string) => {
  const textToChars = (str: string) => str.split('').map((c) => c.charCodeAt(0))
  const byteHex = (n: number) => `0${Number(n).toString(16)}`.substr(-2)
  /* eslint-disable no-bitwise */
  const applySaltToChar = (code: any) => textToChars(salt).reduce((a, b) => a ^ b, code)
  return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('')
}

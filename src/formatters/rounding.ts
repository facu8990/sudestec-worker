export const roundSignificant = (input: number, significant = 2) =>
    Number(Intl.NumberFormat(undefined, { useGrouping: false, roundingMode: 'ceil', maximumSignificantDigits: significant }).format(input));

export const roundSignificant = (input: number, significant = 2) =>
	//@ts-ignore
	Number(Intl.NumberFormat(undefined, { useGrouping: false, roundingMode: 'ceil', maximumSignificantDigits: significant }).format(input));

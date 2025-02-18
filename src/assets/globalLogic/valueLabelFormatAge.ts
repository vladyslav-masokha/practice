const valueLabelFormatAge = (value: number) => {
	if (value % 10 === 1 && value !== 11) return `${value} рік`

	if (
		(value % 10 === 2 && value !== 12) ||
		(value % 10 === 3 && value !== 13) ||
		(value % 10 === 4 && value !== 14)
	)
		return `${value} роки`

	return `${value} років`
}

export { valueLabelFormatAge }

export const paginator = (titles, resultsPerPage) => {
if (titles) {

	let newArr = [];
	let i,
		j,
		newSlice,
		chunk = resultsPerPage;
	for (i = 0, j = titles.length; i < j; i += chunk) {
		const prevIdx = i - 1 < 0 ? titles.length - 1 : i - 1;
		const nextIdx =
			i + chunk + 1 > titles.length - 1 ? 0 : i + chunk;
		newSlice = titles.slice(i, i + chunk);
		newSlice.unshift(titles[prevIdx]);
		newSlice.push(titles[nextIdx]);
		newArr.push(newSlice);
	}
	return newArr;
}
}
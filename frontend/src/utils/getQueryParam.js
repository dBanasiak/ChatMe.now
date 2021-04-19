export const getQueryParams = (params) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	if (typeof params === 'object') {
		return params.map(param => urlParams.get(param));
	}
	return urlParams.get(params);
};

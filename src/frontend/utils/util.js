const checkItemInArray = (arr = [], item) =>
	Boolean(arr.filter((arrItem) => arrItem._id === item._id).length);

export { checkItemInArray };

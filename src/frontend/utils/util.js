export const checkItemInArray = (arr = [], item) =>
	Boolean(arr.filter((arrItem) => arrItem._id === item._id).length);

export const getUnionArraysOfObjects = (
	mainArray,
	checkArray,
	predicate = "_id"
) =>
	mainArray.filter(({ [predicate]: mainArrayItem }) =>
		checkArray.some(
			({ [predicate]: checkArrayItem }) => mainArrayItem === checkArrayItem
		)
	);

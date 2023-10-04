export default function cleanSet(set, startString) {
  const setArray = [...set];

  const filteredValue = setArray.filter((value) => value.startsWith(startString));

  const cleanedValue = filteredValue.map((value) => value.slice(startString.length)).join('-');

  return cleanedValue;
}

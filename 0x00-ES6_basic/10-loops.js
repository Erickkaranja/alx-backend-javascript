export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (let idx of array) {
  idx = appendString + idx;
  my_array.push(idx);
}
  return my_array;
}

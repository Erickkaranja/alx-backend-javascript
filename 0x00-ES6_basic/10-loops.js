export default function appendToEachArrayValue(array, appendString) {
  let my_array = [];
  for (let value of array) {
  value = appendString + value;
  my_array.push(value);
}
  return my_array;
}

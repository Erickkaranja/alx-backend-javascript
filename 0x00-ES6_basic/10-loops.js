export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (let value of array) {
    value = appendString + value;
    myArray.push(value);
  }
  return myArray;
}

export default function createIteratorObject (report) {
  const iterable = Object.keys(report.allEmployees);
  const array = [];
  for (const key of iterable) {
    const value = Object.values(report.allEmployees[key]);
    for (const val of value) {
      array.push(val);
    }
  }
  return array;
}

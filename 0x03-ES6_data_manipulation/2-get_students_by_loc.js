/**
 * This function gets a list of students from a given city.
 * @param {Array} studentList - An array of students.
 * @param {string} city - The city to filter students by.
 * @return {Array} Returns a list of students from the given city.
 */
export default function getStudentsByLocation(studentList, city) {
  const studentsInCity = studentList.filter(
      (student) => student.location === city,
  );

  return studentsInCity;
}

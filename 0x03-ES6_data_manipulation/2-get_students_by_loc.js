/**
 * This function gets a list of students from a given city.
 * @return {list} returns a list of given students.
 */
export default function getStudentsByLocation(studentList, city) {
  const studentsInCity = studentList.filter(
      (student) => student.location === city,
  );

  return studentsInCity;
}

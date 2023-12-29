/**
 * This function gets a list of students.
 * @param {Array} studentList - An array of students.
 * @return {number} Returns the sum of student ids.
 */
export default function getStudentIdsSum(studentList) {
  const sumId = studentList.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumId;
}

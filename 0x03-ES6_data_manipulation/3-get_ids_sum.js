/**
 * This function gets a list of students.
 * @return {list} returns a list of given students.
 */
export default function getStudentIdsSum(studentList) {
  const sumId = studentList.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0);

  return sumId;
}

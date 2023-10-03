export default function getStudentIdsSum(studentList) {
  const sumId = studentList.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0);

  return sumId;
}

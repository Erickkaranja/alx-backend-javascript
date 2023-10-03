export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  const studentId = studentsList.map((student) => student.id);
  return studentId;
}

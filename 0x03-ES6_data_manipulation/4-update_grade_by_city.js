export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter((student) =>
    student.location === city);

  const studentsWithGrades = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) =>
      grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
  return studentsWithGrades;
}

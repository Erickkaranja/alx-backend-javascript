export default function getStudentsByLocation(studentList, city) {
  if (typeof city === 'string') {
    const studentsInCity = studentList.filter(
        (student) => student.location === city,
    );

    return studentsInCity;
  }
}

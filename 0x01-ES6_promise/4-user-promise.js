export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const employeeObject = {
      firstName,
      lastName,
    };
    resolve(employeeObject);
  });
}

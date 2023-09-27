export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
  const employeeObject = {
    firstName,
    lastName,
  };
  resolve(employeeObject);
  });
}

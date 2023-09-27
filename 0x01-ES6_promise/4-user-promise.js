export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
  const employeeObject = {
    [firstName]: firstName,
    [lastName]: lastName,
  };
  resolve(employeeObject);
  });
}

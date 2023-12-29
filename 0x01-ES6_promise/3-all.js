import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
       const val = [values[0].body, values[1].firstName, values[1].lastName]
       console.log(val.join(' '))
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

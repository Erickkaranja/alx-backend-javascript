import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser () {
  const photo = await uploadPhoto();
  const user = await createUser();
  const response = {
    photo,
    user
  };

  return response;
}

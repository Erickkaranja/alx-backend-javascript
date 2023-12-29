import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser () {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    const response = {
      photo,
      user
    };
    return response;
  } catch (error) {
      return {
        photo: null,
        user: null
      };
    }
}

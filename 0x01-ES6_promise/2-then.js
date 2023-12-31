export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      response({
        status: 200,
        body: 'success',
      });
    })
    .catch((error) => {
      return new Error();
    });
}

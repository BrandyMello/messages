export const postMessage = async newMessage => {
  const url = 'http://localhost:3000'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newMessage })
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('You clearly do not know what you are doing.')
  }

  const data = await response.json();
  console.log(data)
  return data;
}
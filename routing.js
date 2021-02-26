const rootPathToTweeter = () => {
  return('http://10.0.2.2:3000/');
} 

export const createUser = async (user) => {
  const createUserPath = rootPathToTweeter() + 'users'

  await fetch(createUserPath, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

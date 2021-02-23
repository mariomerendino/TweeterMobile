const rootPathToTweeter = () => {
  return('localhost:3000/')
} 

export const createUser = async (user) => {
  let createUserPath = rootPathToTweeter() + 'users'

  let x = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue'
    })
  }).then((response) => console.log(response))
  console.log(x);
  return x;
}

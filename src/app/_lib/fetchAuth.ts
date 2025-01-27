export async function fetchAuth(mode, email, password) {
  const API_KEY = 'AIzaSyA9QbpMDAv5yAvWlR8K_zd4au_Zus-kANM';

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email:email,
      password: password,
      returnSecureToken: true,
    })});
  const token = response.json();

  return token;
}
export async function fetchSession() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`;
  try {
  const response = await fetch(url,{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  });
  return response.json();
} catch(error) {
  console.log(error);
}
}
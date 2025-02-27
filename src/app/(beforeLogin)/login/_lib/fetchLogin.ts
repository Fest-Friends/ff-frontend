import { z } from "zod";
import { loginSchema } from "./loginSchema";

export async function fetchLogin(data: z.infer<typeof loginSchema>) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`;
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return response.json();
}
import { z } from "zod";
import { signUpSchema } from "./signUpSchema";

export async function fetchSignUp(data: z.infer<typeof signUpSchema>) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/signup`;
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();

}
import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers

// GET(or POST) /api/auth/a
// GET(or POST) /api/auth/b
// GET(or) /api/auth/c/a 다 가능




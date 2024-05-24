import { GenderEnum } from "@/types";

export async function GET() {
  return Response.json({
    patients: [
      {
        first_name: "first_name",
        last_name: "last_name",
        age: 23,
        gender: GenderEnum.MALE,
        login: "login",
        password: "password"
      }
    ]
  });
}

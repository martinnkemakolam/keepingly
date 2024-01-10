import { cookies } from "next/headers";
import SignIn from "./(pages)/login";
export const metadata = {
  title: "Keepingly",
};
export default function Login(params) {
  console.log("cookie login", cookies().getAll());
  return <SignIn />;
}

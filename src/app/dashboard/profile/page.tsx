import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser, getRoles } = await getKindeServerSession();
  const user = await getUser();
  const roles = await getRoles();

  return <code>{JSON.stringify(roles,null,2) }{ JSON.stringify(user,null,2)} </code>;
  }
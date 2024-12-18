import Wizard from "@/components/wizard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Claim() {
  const { getUser, getRoles, getPermissions } = await getKindeServerSession();
  const user = await getUser();
  const roles = await getRoles();
  const permissions = await getPermissions();

  return (
    <main>
        <p>Welcome {user?.given_name}!</p>
        <p>Your roles: {roles?.join(", ")}</p>
        <p>Your permissions: {JSON.stringify(permissions?.permissions)}</p>
        <Wizard/>
  
    </main>
  )
  }
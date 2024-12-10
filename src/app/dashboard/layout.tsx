import SideNav from '@/app/ui/dashboard/sidenav';
import { getKindeServerSession, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server';
 
export default async function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  //  console.log("[isAuthenticated]", isAuthenticated);

  if (!isUserAuthenticated) {
return (
  <main>
    <h1>
      You are currently not logged in, <LoginLink>Login</LoginLink> here
    </h1>
  </main>
);
}

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-48">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
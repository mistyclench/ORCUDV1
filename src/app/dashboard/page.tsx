import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Linegraph from '@/app/ui/dashboard/linegraph';
import RecentTransactions, { RecentClaims } from "../ui/dashboard/tables";

export default async function Dashboard() {
  const { getUser, getRoles } = await getKindeServerSession();
  const user = await getUser();
  const roles = await getRoles();
  console.log(roles);

  return (
    <main>
      <div className="flex flex-row justify-between">
    <h1> Welcome {user?.given_name}!</h1>
    <button className="object-right bg-transparent hover:bg-teal-400 text-teal-400 font-semibold hover:text-white py px-2 border border-teal-400 hover:border-transparent rounded ">+ Add third party</button>
    </div>
    <div className="flex flex-wrap">
        <div className="w-1/3 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal text-2xl`}>
              Total Initial Investment
            </p>
            <h1 className="text-5xl text-gray-400">Ghs200</h1>
          </article>
        </div>
        <div className="w-1/3 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3 text-2xl">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal`}>
              Total Claims
            </p>
            <h1 className="text-5xl text-gray-400 text-2xl">1000</h1>
          </article>
        </div>
        <div className="w-1/3 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal text-2xl`}>
              Total Interest
            </p>
            <h1 className="text-5xl text-gray-400">Ghs200</h1>
          </article>
        </div>

    </div>
    <div className="flex flex-wrap">
    <div className="w-2/3 p-4 gap-2">
      <article className="bg-white rounded-lg shadow p-3 text-2xl">
        <Linegraph/>
      </article>
    </div>  
    <div className="w-1/3 p-4 gap-2">
      <article className="bg-white rounded-lg shadow p-3 text-2xl">
        <RecentClaims/>
      </article>
    </div>
    </div>
    <div className="w-full p-4 gap-2">
    <article className="bg-white rounded-lg shadow p-3 text-2xl">
      <RecentTransactions/>
        </article>
    </div>

  </main>
  )}
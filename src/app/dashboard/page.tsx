import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { shares } from "@/utils/shares";

export default async function Dashboard() {
  const { getUser, getRoles } = await getKindeServerSession();
  const user = await getUser();
  const roles = await getRoles();
  console.log(roles);

  return (
    <main>
    <h1> Welcome {user?.given_name}!</h1>
    <div className="flex flex-wrap">
        <div className="w-1/4 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal text-2xl`}>
              Total Claims made
            </p>
            <h1 className="text-7xl text-gray-400">Ghs200</h1>
          </article>
        </div>
        <div className="w-1/4 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal`}>
              Total Initial shares
            </p>
            <h1 className="text-7xl text-gray-400 text-2xl">1000</h1>
          </article>
        </div>
        <div className="w-1/4 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal text-2xl`}>
              Total Claims made
            </p>
            <h1 className="text-7xl text-gray-400">Ghs200</h1>
          </article>
        </div>
        <div className="w-1/4 p-4 gap-2">
          <article className="bg-white rounded-lg shadow p-3">
            {/* Article content */}
            <p className={`antialiased text-gray-800 md:leading-normal text-2xl`}>
              Total Initial shares
            </p>
            <h1 className="text-7xl text-gray-400">1000</h1>
          </article>
        </div>
  </div>
  <div className="flex flex-wrap">
    <div className="w-2/3 p-4 gap-2">
    <article className="bg-white rounded-lg shadow p-3 text-2xl">
    <table className="table-auto border-spacing-x w-full">
  <thead>
    <tr>
      <th className="float-left">Company Name</th>
      <th className="float-left">Initial Amount</th>
      <th>Shares</th>
    </tr>
  </thead>
  <tbody>
    {shares.map ((share) => {
      return(
        <tr key={share.id}>
      <td>{share.companyName}</td>
      <td>{share.sharePrice}</td>
      <td>{share.shares}</td>
        </tr>
      )
    } )}
    </tbody>
    </table>
        </article>
        </div>
        <div className="w-1/3 p-4 gap-2">
    <article className="bg-white rounded-lg shadow p-3 text-2xl">
    <table className="table-auto w-full">
  <thead>
    <tr>
      <th className="float-left">Company Name</th>
      <th>Initial Shares</th>
    </tr>
  </thead>
  <tbody>
    {shares.map ((share) => {
      return(
        <tr key={share.id}>
      <td>{share.companyName}</td>
      <td>{share.shares}</td>
        </tr>
      )
    } )}
    </tbody>
    </table>
        </article>
        </div>  </div>
  </main>
  )}
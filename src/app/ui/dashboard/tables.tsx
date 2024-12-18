import { faker } from "@faker-js/faker";

export function RecentClaims() {
  return (
    <div>
      <h1 className="text-2xl">Recent Claims</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">Company Name</th>
          <th scope="col" className="px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{faker.company.name()}</td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">GHS{faker.number.int({ min: 100, max: 500 })}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default function RecentTransactions() {
    return (
<div>
    <h1 className="text-2xl">Recent Transactions</h1>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">Company Name</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Date of Investment</th>
        </tr>
        </thead>
        <tbody>
        {[...Array(10)].map((_, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{faker.company.name()}</td>
                <td  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{faker.number.int({ min: 1, max: 10000 })}</td>
                <td  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{faker.finance.transactionType()}</span></td>
                <td  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">2022-07-11</td>
            </tr>
))}
        </tbody>
    </table>
</div>
    );
}
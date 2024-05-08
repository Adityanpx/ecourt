
import Link from "next/link"

export function LawyersReq() {
  return (<>
    <header
      className="flex items-center justify-between px-6 py-4 text-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">Welcome Lawyer</h1>
      <div className="flex items-center space-x-4">
        <Link
          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
          href="#">
          View Account
        </Link>
        <Link
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          href="#">
          Logout
        </Link>
      </div>
    </header>
    <main className="bg-gray-100 px-6 py-8 dark:bg-gray-800">
      <div
        className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold">No New Clients Requests Today!!!</h2>
      </div>
    </main>
  </>);
}

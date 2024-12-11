
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "My Dashboard", href: "/dashboard" },
  {
    name: "Make Claim",
    href: "/dashboard/claim",
  },
  // { name: "Users", href: "/dashboard/users" },
  // { name: "Reports", href: "/dashboard/reports" },
  { name: "Profile", href: "/dashboard/profile" },
];

export default function SideNav() {

  return (
    <main className="bg-gray-50 min-h-screen">
      {links.map((link) => {
        return (
          <div key={link.name}>
            <Link
              href={link.href}
              className={
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              }
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
}

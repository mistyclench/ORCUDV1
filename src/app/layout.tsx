import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { AuthProvider } from "./authProvider";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ORCUD v2.0.0",
    default: "Welcome to ORCUD Dashboard",
  },
  description: "The official website to claim your unclaimed dividends from the Office of the Registrar of Companies",
  metadataBase: new URL("https://orc.gov.gh"),
};
const links = [
  {
    name: "FAQ",
    href: "/#",
  },
  { name: "Contact Us", href: "/#" },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();
  
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav
            className={`flex justify-between items-center p-4 text-violet-950 bg-gray-50`}
          >
            <Link
              href="/"
              className="flex flex-row logo-text divide-x-2 hover:bg-sky-100 hover:text-blue-600"
            >
              <div className="">
                <Image
                  src="/ORC-logo.png"
                  width={35}
                  height={35}
                  className="block items-center p-1"
                  alt="ORC Logo"
                />
              </div>

              <p className="text-[8px] h-8 pl-1">
                OFFICE OF
                <br /> THE REGISTRAR
                <br /> OF COMPANIES
              </p>
            </Link>
            <div className="flex gap-2 logo-text">
              {links.map((link) => {
                return (
                  <Link className="px-4 hover:bg-sky-100 hover:text-blue-600" key={link.name} href={link.href}>
                    <p className="hidden md:block">{link.name}</p>
                  </Link>
                );
              })}
            {isAuthed ? (<LogoutLink className="px-4 hover:bg-sky-100 hover:text-blue-600">Logout</LogoutLink>): (<LoginLink className="px-4 hover:bg-sky-100 hover:text-blue-600">Login</LoginLink>)}
            </div>
          </nav>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}

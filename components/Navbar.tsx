"use client";
import { categorys } from "@/lib/categorys";
import { getLoggedInUser, logout } from "@/lib/firebase/authService";
import { auth } from "@/lib/firebase/firebase.init";
import { getUserByEmail } from "@/lib/firebase/user";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Spin } from "antd";
import { ChevronDown, Code2, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Hazrat Ali Blogs</span>
          </Link>
          <div className="hidden md:block">
            <Menus />
          </div>
          {show && (
            <div className="lg:hidden block absolute top-[70px] right-0 w-full bg-black">
              <Menus />
            </div>
          )}
          <div className="md:hidden">
            <Menu className="h-6 w-6" onClick={() => setShow(!show)} />
          </div>
        </div>
      </div>
    </nav>
  );
};
// Navbar Tsx
export default Navbar;

const Menus = () => {
  const [user, loading, error] = useAuthState(auth);
  const [adminLinks, setAdminLinks] = React.useState<any>([]);
  useEffect(() => {
    if (user) {
      (async () => {
        const userf: any = await getUserByEmail(user.email as string);
        if (userf.role === "admin") {
          setAdminLinks([
            { name: "Articles", href: "/admin/articles" },
            { name: "Write Article", href: "/admin/articles/write" },
            { name: "Users", href: "/admin/users" },
          ]);
        }
      })();
    }
  }, [user]);
  if (loading) {
    return <Spin size="large" fullscreen />;
  }
  return (
    <div className="flex lg:flex-row flex-col gap-y-4 lg:items-center items-start p-5 lg:p-0 space-x-4">
      <Link href="/" className="hover:text-blue-400 transition-colors">
        Home
      </Link>
      <Dropdown
        menu={{
          items: categorys.map((c) => ({
            key: c.id,
            label: <Link href={`${c.slug as string}`}>{c.name}</Link>,
          })),
        }}
      >
        <button>
          <Space>
            Articles
            <ChevronDown />
          </Space>
        </button>
      </Dropdown>
      <Link href="/category" className="hover:text-blue-400 transition-colors">
        Category
      </Link>
      <Link
        href="/achievement"
        className="hover:text-blue-400 transition-colors"
      >
        Aachievements
      </Link>
      {!user ? (
        <Link
          href="/auth/login"
          className="hover:text-blue-400 transition-colors"
        >
          Login
        </Link>
      ) : (
        <Dropdown
          menu={{
            items: [
              {
                type: "divider",
              },
              ...adminLinks.map((link: any) => ({
                key: link.href,
                label: <Link href={link.href}>{link.name}</Link>,
              })),
              {
                key: "1",
                label: (
                  <button
                    className="text-red-600 hover:text-red-800 font-medium text-center cursor-pointer"
                    onClick={() => {
                      logout();
                      window.location.href = "/auth/login";
                    }}
                  >
                    Logout
                  </button>
                ),
              },
            ],
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {user.displayName?.slice(0, 10) || user.email?.slice(0, 10)}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      )}
    </div>
  );
};

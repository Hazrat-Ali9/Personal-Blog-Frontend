"use client";
import { auth } from "@/lib/firebase/firebase.init";
import { getUserByEmail } from "@/lib/firebase/user";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = React.useState(false);
  useEffect(() => {
    if (user?.email) {
      (async () => {
        const userf: any = await getUserByEmail(user.email as string);
        if (userf.role === "admin") {
          setIsAdmin(true);
        }
      })();
    }
  }, [user]);
  if ((!user || !isAdmin) && !loading) {
    return null;
  }
  return (
    <div>
      <Spin size="large" fullscreen spinning={loading} />
      {children}
    </div>
  );
};

export default Layout;

// Layout tsx
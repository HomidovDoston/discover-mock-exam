"use client";

import { useState, useEffect } from "react";
import LoginPage from "@/components/login-page";
import IELTSPlatform from "@/components/ielts-platform";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedName = localStorage.getItem("userFullName");
    if (storedName) {
      setUserName(storedName);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (name: string) => {
    localStorage.setItem("userFullName", name);
    setUserName(name);
    setIsLoggedIn(true);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <IELTSPlatform userName={userName} />
      )}
    </main>
  );
}

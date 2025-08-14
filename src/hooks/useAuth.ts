"use client";
import { useEffect, useState } from "react";
import { safeLocalStorage } from "@/helpers/storage";
import { getProfile } from "@/services/auth.service";
type User = {
  id: string;
  email: string;
  name?: string;
  role?: string;
};

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = safeLocalStorage.get("token");
    if (!token) { setLoading(false); return; }
    getProfile()
      .then((res: User) => setUser(res))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}

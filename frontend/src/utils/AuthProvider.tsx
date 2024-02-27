import { AuthContext } from "@/components/context/AuthContext";
import { User } from "@/components/type/Types";
import { ReactNode, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(undefined);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

import { createContext } from "react";
import { User } from "../type/Types";

type AuthProviderProps = {
  user: User | undefined;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthProviderProps>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useState } from "react";
import AuthDialog from "./AuthDialog";
import { AuthContext } from "./context/AuthContext";
import { AuthMethod } from "./type/Types";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthMethod>(undefined);

  return (
    <div className="flex justify-between items-center px-4 py-2 m-auto bg-black text-white">
      <h1 className="">Movie Review</h1>
      <Input type="text" placeholder="Search" className="w-1/2" />
      <DropdownMenu>
        {user && <DropdownMenuLabel>Hi, {user.username}</DropdownMenuLabel>}
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        {user ? (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account : {user.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setOpen(true), setAuthType("Update");
              }}
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>My Reviews</DropdownMenuItem>
            <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                setOpen(true), setAuthType("Login");
              }}
            >
              Login
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpen(true), setAuthType("Signup");
              }}
            >
              Register
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
      <AuthDialog open={open} setOpen={setOpen} authType={authType} />
    </div>
  );
};

export default Header;

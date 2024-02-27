import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { instance, requests } from "@/utils/axios";
import { AuthMethod, User } from "./type/Types";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

type SignUpDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  authType: AuthMethod;
};

const SignUpDialog = ({ open, setOpen, authType }: SignUpDialogProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: User = {
      username,
      email,
      password,
    };

    try {
      if (authType === "Signup") {
        const res = await instance.post(requests.signup, userData);
        console.log(res.data);
      } else if (authType === "Login") {
        const res = await instance.post(requests.login, userData);
        login(res.data);
      } else if (authType === "Update") {
        const res = await instance.put(`${requests.updateAccount}/${user?.user_id}`);
        console.log(res.data);
      }
      wait().then(() => setOpen(false));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data);
      } else {
        console.error("An unexpected error occurred:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    if (!open) {
      setError("");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{authType}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {authType === "Signup" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  required
                  id="username"
                  className="col-span-3"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                required
                defaultValue={user?.email || ""}
                type="email"
                className="col-span-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                required
                id="password"
                type="password"
                className="col-span-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;

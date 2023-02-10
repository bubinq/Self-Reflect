import { createContext, ReactElement } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type User = {
  displayName: string | undefined;
  username: string | undefined;
  email: string;
  profilePicture: string | undefined;
  createdAt: string | undefined;
};

type authContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const AuthContext = createContext<authContext>({
  user: {
    email: "",
    username: "",
    displayName: "",
    profilePicture: "",
  } as User,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useLocalStorage("user");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

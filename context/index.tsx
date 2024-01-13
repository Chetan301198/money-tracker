"use client";
import { User } from "@/constant";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

interface IProps {
  user: User | null;
  setUser: SetStateAction<Dispatch<User | null>>;
  loading: boolean;
  setLoading: SetStateAction<Dispatch<boolean>>;
}

const GlobalContext = createContext<IProps>({
  user: null,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/user")
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

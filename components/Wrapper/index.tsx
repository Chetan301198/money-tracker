"use cliet";
import { GlobalContextProvider } from "@/context";
import { ThemeProvider } from "next-themes";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ThemeProvider>
  );
};

export default Wrapper;

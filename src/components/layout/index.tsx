import { FC } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { AppLayoutProps } from "./types";

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
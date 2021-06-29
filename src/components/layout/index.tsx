import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1440} transition="0.5s ease-out">
      <Meta />
      <Box padding="3">
        <Header />
        <Box as="main" my="4">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

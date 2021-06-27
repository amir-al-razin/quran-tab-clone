import { Box, Flex, Heading } from "@chakra-ui/layout";

import { Button } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading as="h1" size="md">
          Quran Tab
        </Heading>
      </AccessibleLink>

      <Flex marginLeft="auto">
        <Button mr="1">Adhkar 🤲</Button>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;

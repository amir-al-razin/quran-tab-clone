import { SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { Flex, Link, Text, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="space-between">

      <Flex align="center">
      <IconButton mr="1" aria-label="settings" icon={<SettingsIcon fontSize="xl" />} />
        <Text>
          {new Date().getFullYear()} -{" "}
          <Link href="https://amir.dev" isExternal>
            amir.dev
          </Link>
        </Text>
      </Flex>
        <IconButton  aria-label="favourites" icon={<StarIcon />} />
    </Flex>
  );
};

export default Footer;

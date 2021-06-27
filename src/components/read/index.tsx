import React from "react";
import { Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";

interface Props {}

const Read = (props: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      backgroundColor={colorMode === "light" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}
      padding={4}
      borderRadius={4}
    >
      <Box d="flex" alignItems="center" fontSize="sm">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Box>
    </Box>
  );
};

export default Read;

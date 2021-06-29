import React from "react";
import { Box } from "@chakra-ui/layout";
import { Flex, VStack,Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

interface Props {}

const Read = (props: Props) => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      backgroundColor={colorMode === "light" ? "whiteops.200" : "blackops.200"}
      padding={4}
      borderRadius={4}
    >
      <Text  fontSize="4xl" fontFamily="madani">
        إِنَّ اللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي
        السَّمَاءِ
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        Indeed nothing is hidden from Allah, neither in the earth nor in the
        heavens.
      </Text>
    </VStack>
  );
};

export default Read;

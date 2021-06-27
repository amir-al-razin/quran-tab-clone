import React from "react";

import { Box, Heading } from "@chakra-ui/layout";
interface Props {}

const CurrentTime = (props: Props) => {
  return (
    <Heading textAlign="center" fontSize="8xl" fontWeight="semibold">
      {new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </Heading>
  );
};

export default CurrentTime;

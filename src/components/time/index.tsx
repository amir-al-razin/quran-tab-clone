import React from "react";
import { Flex, Link, Text, Box } from "@chakra-ui/layout";
import _ from "lodash";
import { useColorMode, Spinner } from "@chakra-ui/react";
import { fetcher } from "utils/fetcher";
import useSWR from "swr";
import useGeoLocation from "custom-hooks/useGeoLocation";

interface Props {}

const Time = (props: Props) => {
  const { colorMode } = useColorMode();
  const location = useGeoLocation();
  const { data, error } = useSWR(
    `http://api.aladhan.com/v1/calendar?latitude=${
      location.coordinates?.lat
    }&longitude=${location.coordinates?.lng}&method=4&month=${
      new Date().getMonth() + 1
    }&year=${new Date().getFullYear()}`,
    fetcher
  );
  let response = data?.data[new Date().getUTCMonth()].timings;
  return (
    <Flex
      bgColor={colorMode === "light" ? "whiteops.200" : "blackops.200"}
      ml="4"
      py="3"
      borderRadius="md"
      flexDirection="column"
      align="center"
      justify="center"
    >
      {!data && !response ? (
        <Spinner />
      ) : (
        Object.keys(response)
          .slice(0, -2)
          .map((n: any, i: number) => (
            <Flex
              key={i}
              fontWeight="medium"
              fontSize="lg"
              mb="4"
              flexDirection="column"
              align="center"
            >
              <Text letterSpacing="tighter">{n}</Text>
              <Text>{response[n].replace(/\(.*\)/g, "")}</Text>
            </Flex>
          ))
      )}
    </Flex>
  );
};

export default Time;

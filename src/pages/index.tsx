import { Box } from "@chakra-ui/layout";
import { Flex, Grid } from "@chakra-ui/react";
import CurrentTime from "components/CurrentTime";
import Read from "components/read";
import Time from "components/time";

const Home = () => {
  return (
    <Grid w="full" templateColumns="9fr 1fr">
      <Flex flexDirection="column">
        <CurrentTime />
        <Read />
      </Flex>
      <Time />
    </Grid>
  );
};

export default Home;

import { Box } from "@chakra-ui/layout";
import { Flex, Grid, VStack, IconButton } from "@chakra-ui/react";
import CurrentTime from "components/CurrentTime";
import Options from "components/Options";
import Read from "components/read";
import List from "components/read/List";
import Time from "components/time";
import { AiOutlinePauseCircle } from "react-icons/ai";

const Home = () => {
  return (
    <Grid w="full" templateColumns="9fr 1fr">
      <Flex flexDirection="column" align="center" justifyContent="center" >
        <CurrentTime />
        <Read />
        <Options />
        <List />
      </Flex>
      <VStack align="stretch">
        <Time />
        <IconButton
          aria-label="stop-adhan"
          fontSize="2xl"
          transform="translateX(10px)"
          alignSelf="center"
          icon={<AiOutlinePauseCircle />}
        />
      </VStack>
    </Grid>
  );
};

export default Home;

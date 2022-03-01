import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        p={3}
        bg={"white"}
        borderRadius="lg"
        borderWidth="1px"
        justifyContent="center"
        m="40px 0px 15px 0px"
        w="100%"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          SendOn
        </Text>
      </Box>
      <Box w="100%" p={4} bg={"white"} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList m="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;

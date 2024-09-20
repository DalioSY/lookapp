import React from "react";
import {Box, Button, Spacer, Text, Title} from "../../components";
import {StatusBar} from "react-native";

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box justify="center" hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px">
            Stary on top of the fashion worl land buy your favorite looks.
          </Text>
        </Box>

        <Box align="center" fluid justify="flex-end">
          <Button block onPress={() => navigation.navigate("Signin")}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer size="20px" />
          <Text
            underline
            color="light"
            onPress={() => navigation.navigate("Signup")}>
            Create new account
          </Text>
          <Spacer size="70px" />
        </Box>
      </Box>
    </>
  );
};

export default Home;

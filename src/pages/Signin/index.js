import React from "react";
import {Box, Button, Input, Spacer, Text, Title} from "../../components";
import {StatusBar} from "react-native";

const SignIn = ({navigation: {navigate, replace}}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold variant="big">
          LOOKUP
        </Title>
        <Spacer size="20px" />
        <Title bold>SignIn my account.</Title>
        <Spacer size="50px" />
        <Input placeholder="E-mail" />
        <Spacer />
        <Input placeholder="Password" secureTextEntry />
        <Spacer size="50px" />
        <Button block onPress={() => replace("Feed")}>
          <Text color="light">SignIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline onPress={() => navigate("Signup")}>
          Create new account
        </Text>
      </Box>
    </>
  );
};
export default SignIn;

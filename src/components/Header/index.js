import React from "react";
import {Box, Title, Touchable} from "..";
import {SafeAreaView, StatusBar} from "react-native";
import {colors} from "../../styles/theme.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = ({title}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box
        fluid
        height="100px"
        justify="center"
        border={`1px solid ${colors.muted}50 `}>
        <SafeAreaView style={{flexDirection: "row"}}>
          <Touchable
            width="80px"
            justify="center"
            align="center"
            onPress={() => alert("teste")}>
            <Icon name="menu" size={20} color={colors.black} />
          </Touchable>
          <Box align="center" justify="center">
            <Title> {title} </Title>
          </Box>
          <Touchable width="80px"></Touchable>
        </SafeAreaView>
      </Box>
    </>
  );
};
export default Header;

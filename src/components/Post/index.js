import React from "react";
import {Box, Cover, Spacer, Text, Touchable} from "..";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import {colors} from "../../styles/theme.json";

const Post = () => {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover
          circle
          width="40px"
          height="40px"
          source={require("../../img/5.png")}></Cover>
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            Yumi
          </Text>
          <Text variant="small">2 min ago</Text>
        </Box>
        <Touchable height="30px" width="100px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Cover
        source={require("../../img/2.png")}
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="10px"></Cover>
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map(item => (
            <Cover
              circle
              width="30px"
              height="30px"
              borde={`1px solid ${colors.light}`}
              spacing="0px -15px 0px 0px"
              source={require("../../img/5.png")}></Cover>
          ))}
          <Text variant="small" spacing="0px 20px">
            Liked by 10,098
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="heart" size={24} color={colors.danger}></Icon>
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted}></Icon>
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted}></Icon>
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        'Slow Fashion'
      </Text>
    </Box>
  );
};
export default Post;

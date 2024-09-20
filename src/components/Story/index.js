import React from "react";
import {Box, Cover, Text, Touchable} from "..";

import {colors} from "../../styles/theme.json";

const Story = () => {
  return (
    <Touchable
      onPress={() => alert("teste")}
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px">
      <Cover width="100%" height="100%" source={require("../../img/2.png")}>
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between">
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            source={require("../../img/5.png")}></Cover>

          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              Yumi
            </Text>
            <Text color="light" variant="small">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};
export default Story;

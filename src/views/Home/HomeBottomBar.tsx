import { Flex, Text, Box } from "@chakra-ui/react";

const HomeBottomBar = () => {
  return (
    <Flex height="40px" align="center">
      {/* Home button */}
      <Text flexGrow="1" textAlign="center" fontSize="14px" fontWeight="600">
        Home
      </Text>

      {/* Last read box */}
      <Box
        position="relative"
        bottom="20px"
        bgColor="#bcc4c3"
        width="40px"
        height="70px"
        pt="2px"
      >
        <Box
          width="90%"
          height="90%"
          border="1px solid black"
          margin="auto auto"
        ></Box>
      </Box>

      {/* Library button */}
      <Text flexGrow="1" textAlign="center" fontSize="14px" fontWeight="600">
        Library
      </Text>
    </Flex>
  );
};

export default HomeBottomBar;

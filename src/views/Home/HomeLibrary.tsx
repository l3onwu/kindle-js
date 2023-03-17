import { Box, Flex } from "@chakra-ui/react";

const HomeLibrary = () => {
  return (
    <Box
      p="15px"
      width="100%"
      height="415px"
      overflow="scroll"
      border="1px solid gray"
      borderBottom="2px solid black"
      className="kindle-library-scrollbar"
    >
      <Flex wrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((book) => {
          return <BookTile key={book} />;
        })}
      </Flex>
    </Box>
  );
};

const BookTile = () => {
  return (
    <Box
      width="92px"
      height="120px"
      bgColor="transparent"
      border="1px solid gray"
      mr="10px"
      mb="10px"
    ></Box>
  );
};

export default HomeLibrary;

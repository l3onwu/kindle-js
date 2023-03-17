import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useGlobalContext } from "../../lib/context";
import { BookType } from "../../lib/useLibrarySettings";

const HomeLibrary = () => {
  // State
  //@ts-ignore
  const { libraryHook } = useGlobalContext();
  useEffect(() => {
    libraryHook?.setFirstLoad(false);
  }, []);

  // TSX
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
        {libraryHook?.contents?.map((book: any, index: any) => {
          return <BookTile key={index} book={book} />;
        })}
      </Flex>
    </Box>
  );
};

const BookTile = ({ book }: { book: any }) =>
  // : { book: BookType }
  {
    return (
      <Box
        width="92px"
        height="120px"
        bgColor="transparent"
        border="1px solid gray"
        mr="10px"
        mb="10px"
        overflow="scroll"
      >
        <Text fontSize="11" fontWeight="bold">
          {book[0]}
        </Text>
      </Box>
    );
  };

export default HomeLibrary;

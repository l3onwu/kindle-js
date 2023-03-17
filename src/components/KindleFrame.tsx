import { Box } from "@chakra-ui/react";

const KindleFrame = (props: any) => {
  return (
    <Box
      width="440px"
      height="650px"
      border="10px solid black"
      borderRadius="20px"
    >
      <Box
        width="100%"
        height="100%"
        border="35px solid #191919"
        borderRadius="5px"
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default KindleFrame;

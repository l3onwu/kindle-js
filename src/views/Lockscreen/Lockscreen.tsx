import { Button, Flex } from "@chakra-ui/react";
import { useGlobalContext } from "../../lib/context";

const Lockscreen = () => {
  // State
  // @ts-ignore
  const { interfaceHook } = useGlobalContext();

  return (
    <Flex
      height="100%"
      width="100%"
      // bgColor="blue"
      align="center"
      justify="center"
    >
      <Button
        variant="ghost"
        onClick={() => {
          interfaceHook?.setView("home");
        }}
      >
        Swipe to unlock
      </Button>
    </Flex>
  );
};

export default Lockscreen;

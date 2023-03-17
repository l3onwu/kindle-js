import { Box } from "@chakra-ui/react";
import Home from "../views/Home/Home";
import Lockscreen from "../views/Lockscreen/Lockscreen";
import { useGlobalContext } from "../lib/context";

const KindleScreen = () => {
  // State
  // @ts-ignore
  const { interfaceHook } = useGlobalContext();

  const renderView = () => {
    switch (interfaceHook?.view) {
      case "lockscreen":
        return <Lockscreen />;
      case "home":
        return <Home />;
    }
  };

  // TSX
  return (
    <Box width="100%" height="100%" bgColor="#bcc4c3" zIndex="10">
      {renderView()}
    </Box>
  );
};

export default KindleScreen;

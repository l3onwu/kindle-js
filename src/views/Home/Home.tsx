import { Stack } from "@chakra-ui/react";
import HomeTopBar from "./HomeTopBar";
import HomeLibrary from "./HomeLibrary";
import HomeBottomBar from "./HomeBottomBar";

const Home = () => {
  // TSX
  return (
    <Stack width="100%" spacing="0x">
      <HomeTopBar />
      <HomeLibrary />
      <HomeBottomBar />
    </Stack>
  );
};

export default Home;

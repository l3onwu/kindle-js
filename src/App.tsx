import * as React from "react";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import { GlobalContextProvider } from "./lib/context";
import KindleFrame from "./components/KindleFrame";
import KindleScreen from "./components/KindleScreen";

export const App = () => (
  <ChakraProvider theme={theme}>
    <GlobalContextProvider>
      <Box width="100vw" height="100vh" p="20px" bgColor="gray.700">
        <KindleFrame>
          <KindleScreen />
        </KindleFrame>
      </Box>
    </GlobalContextProvider>
  </ChakraProvider>
);

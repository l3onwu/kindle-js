import * as React from "react";
import { ChakraProvider, theme, Container, Text } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <Text>Hello, world</Text>
    </Container>
  </ChakraProvider>
);

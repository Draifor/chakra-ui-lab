import { Center, Flex } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Center h="100vh" bg="gray.800">
      <Flex h='95vh' w='900px'>
        <Header />
      </Flex>
    </Center>
  );
}

export default App;

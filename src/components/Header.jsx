import headerImg from "../header.jpg";

import {
  VStack,
  Flex,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Header() {
  const width = useBreakpointValue({ base: "320px", sm: "fit-content" });
  return (
    <VStack
      w="full"
      h="250px"
      bg={`url(${headerImg}) center/cover no-repeat`}
      justify="center"
      spacing={4}
    >
      <Heading textShadow="0 0 20px black, 0 0 20px black" color="white">
        VIAJA CON NOSOTROS
      </Heading>
      <Flex gap="15px" direction={{ base: "column", sm: "row" }}>
        <Button _hover={{ bg: "gray.400", color: "black" }} w={width} >
          Ver oferta
        </Button>
        <Button _hover={{ bg: "gray.400", color: "black" }}>
          Más información
        </Button>
      </Flex>
    </VStack>
  );
}

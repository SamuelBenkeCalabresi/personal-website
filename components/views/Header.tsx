import * as React from "react";
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Heading, Spacer } from "@chakra-ui/layout";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} w="100%">
      <Flex as="header" align="center" h={"60px"}>
        <Heading
          fontFamily="Permanent Marker"
          size="md"
          ml="8"
          fontWeight="medium"
          color="cyan.400"
        >
          <Link href="/">Calaben</Link>
        </Heading>
        <Spacer />
        <ChakraLink
          href="https://www.linkedin.com/in/samuel-benke-calabresi-478a14a2/"
          isExternal
        >
          <IconButton
            icon={<FaLinkedin />}
            isRound
            aria-label={"Linkedin Icon"}
            ml="2"
          ></IconButton>
        </ChakraLink>
        <ChakraLink href="https://github.com/SamuelBenkeCalabresi" isExternal>
          <IconButton
            icon={<FaGithub />}
            isRound
            aria-label={"Github Icon"}
            ml="2"
          ></IconButton>
        </ChakraLink>
        <ChakraLink href="https://www.instagram.com/imscalab" isExternal>
          <IconButton
            icon={<FaInstagram />}
            isRound
            aria-label={"Instagram Icon"}
            ml="2"
          ></IconButton>
        </ChakraLink>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          isRound
          aria-label={"Color mode Icon"}
          onClick={toggleColorMode}
          ml="10"
          mr="5"
        />
      </Flex>
    </Box>
  );
};

export default Header;

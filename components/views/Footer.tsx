import "@fontsource/permanent-marker";
import { Box, Stack, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      pos="relative"
      w="100%"
      bottom="0"
      left="0"
      right="0"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      boxShadow="md"
    >
      <Stack
        align="flex-start"
        direction="row"
        justifyContent="space-around"
        maxW="6xl"
        py={10}
      >
        <Stack>
          <ListHeader>Links</ListHeader>
          <Link
            href="https://www.linkedin.com/in/samuel-benke-calabresi-478a14a2/"
            isExternal
          >
            Linkedin
          </Link>
          <Link href="https://github.com/SamuelBenkeCalabresi" isExternal>
            Github
          </Link>
          <Link href="https://www.instagram.com/imscalab" isExternal>
            Instagram
          </Link>
        </Stack>
        <Stack spacing={6}>
          <Box fontFamily="Permanent Marker" fontSize={30}>
            <Link href="/">Samuel Calabresi</Link>
          </Box>
          <Text fontSize="sm">Thank you for reading!</Text>
          <Text fontSize="xs">
            © {currentYear} Samuel Calabresi. All rights reserved
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

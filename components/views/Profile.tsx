import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Card } from "../common";
import { Media, MediaContextProvider } from "../../media";

function Profile() {
  const [isLargerThan800] = useMediaQuery("(min-width:800px)");

  return (
    <MediaContextProvider>
      <Media at="xs">
        <Flex direction="column" w="100%">
          <Box alignSelf="center" px="32" pt="10">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
              5+
            </Heading>
            <Text fontSize="2xl" color="gray.400">
              Years of Experience
            </Text>
          </Box>
          <Box alignSelf="center" px="32" py="10">
            <Text py="8" fontWeight="bold" fontSize="2xl">
              Developer specialised in web and mobile apps development.
            </Text>
            <Flex direction="column" mt={8}>
              <Card text="React Apps" icon={FaReact} color="#61dafb" />
              <Card text="React Native Apps" icon={FaReact} color="green.400" />
              <Card text="Flutter Apps" icon={SiFlutter} color="blue.600" />
            </Flex>
          </Box>
        </Flex>
      </Media>
      <Media greaterThan="xs">
        <Flex direction="column" w="100%">
          <Box alignSelf="center" px="32" pt="10">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
              5+
            </Heading>
            <Text fontSize="2xl" color="gray.400">
              Years of Experience
            </Text>
          </Box>
          <Box alignSelf="center" px="32" py="10">
            <Text py="8" fontWeight="bold" fontSize="2xl">
              Developer specialised in web and mobile apps development.
            </Text>
            <Flex direction="row" mt={8}>
              <Card text="React Apps" icon={FaReact} color="#61dafb" />
              <Card text="React Native Apps" icon={FaReact} color="green.400" />
              <Card text="Flutter Apps" icon={SiFlutter} color="blue.600" />
            </Flex>
          </Box>
        </Flex>
      </Media>
    </MediaContextProvider>
  );
}

export default Profile;

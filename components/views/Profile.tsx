import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Flex direction="column" w="100%">
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          5+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="8">
        <Text py="8" fontWeight="bold" fontSize="2xl">
          Developer specialised in web and mobile apps development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            boxShadow="md"
            direction="column"
            mt={4}
            bg="#61dafb"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={FaReact} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            boxShadow="md"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={FaReact} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              React Native Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            boxShadow="md"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "blue.600" }}
          >
            <Icon color="black" p="4" as={SiFlutter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;

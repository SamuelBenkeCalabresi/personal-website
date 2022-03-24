import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

const Hero = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:900px)");

  return (
    <Stack>
      <Circle
        mt="8"
        position="absolute"
        bg="blue.200"
        opacity="0.1"
        size="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : "5"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align-items="flex-start">
          <Text fontSize="3xl" fontWeight="semibold">
            Nice to see you here 👋
          </Text>
          <Flex>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
              lineHeight="5rem"
            >
              I&apos;m Samuel Calabresi
            </Text>
          </Flex>
          <Text color={isDark ? "gray.200" : "gray.500"} mr="10">
            Building React, React Native & Flutter apps 🚀 Building apps with
            JavaScript, TypeScript, Dart, Swift, Kotlin, NodeJS, AWS and
            Firebase.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={(e) => {
              window.location.href = "mailto:samuelbenke29@gmail.com";
              e.preventDefault();
            }}
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alt="Portrait picture of Samuel Calabresi"
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          objectFit="cover"
          zIndex="2"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={"1x_samuelcalabresi_transparent.png"}
        />
      </Flex>
    </Stack>
  );
};

export default Hero;

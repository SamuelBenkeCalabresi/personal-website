import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  text: string;
  color: string;
}

const Card = ({ icon, text, color = "blue.600" }: CardProps) => {
  return (
    <Flex
      rounded="xl"
      boxShadow="md"
      direction="column"
      m="4"
      bg="gray.100"
      h="30vh"
      w="30vh"
      justify="flex-end"
      _hover={{ bg: color }}
    >
      <Icon color="black" p="4" as={icon} w="24" h="24" />
      <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  );
};

export default Card;

import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaGoogle, FaSpotify } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="7em">
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaSpotify} boxSize="50" />
    </HStack>
  );
}

export default Social;

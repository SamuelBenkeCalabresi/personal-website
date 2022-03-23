import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonMailto = ({ mailto, label, ...rest }) => (
  <Button
    onClick={(e) => {
      window.location.href = mailto;
      e.preventDefault();
    }}
    {...rest}
  >
    {label}
  </Button>
);

export default ButtonMailto;

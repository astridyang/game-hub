import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "normal" : "";
  return (
    <Badge borderRadius="4px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;

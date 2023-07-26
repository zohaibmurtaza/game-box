import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  let color =
    score > 90
      ? "green"
      : score > 80
      ? "yellow"
      : score > 70
      ? "orange"
      : "red";

  return (
    <Badge fontSize="15px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Prop {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Prop) => {
    const heading = `${ gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}`
  return (
    <Text as={Heading} mb="20px"> 
      {heading} Games
    </Text>
  );
};

export default GameHeading;

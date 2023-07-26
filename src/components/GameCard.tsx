import { Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { getCroppedUrl } from "../services/image-url";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import { CriticScore } from "./CriticScore";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card height='100%' padding='10px' borderRadius='15px'>
      <Image src={getCroppedUrl(game.background_image)} borderRadius='12px'/>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
        
      </CardBody>
    </Card>
  );
};

export default GameCard;

import { Image, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
    <Card height="100%" padding="10px" borderRadius="15px">
      <Image src={getCroppedUrl(game.background_image)} borderRadius="12px" />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={`/game/${game.id}`}>
          <Text fontSize="2xl" fontWeight="bold">
            {game.name} <Emoji rating={game.rating_top} />
          </Text>
        </Link>
      </CardBody>
    </Card>
  );
};

export default GameCard;

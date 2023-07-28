import {
  Button,
  HStack,
  Heading,
  Image,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import DOMPurify from "dompurify";
import { getCroppedUrl } from "../services/image-url";
import { BsArrowLeft } from "react-icons/bs";
import PlatformIcons from "./PlatformIcons";
import { CriticScore } from "./CriticScore";

const SingleGame = () => {
  const { gameId } = useParams<string>();
  const { data, error, isLoading } = useGame(gameId);
  let game:any = data;
  if (error) return error;
  else
    return (
      <>
        <VStack alignItems="flex-start">
          <Button as={Button} onClick={() => history.back()} marginBlock={4}>
            <BsArrowLeft /> Back
          </Button>
          {isLoading && <Spinner />}
        </VStack>
        {!isLoading && (
          <VStack alignItems="flex-start">
            <Image
              src={getCroppedUrl(game?.background_image)}
              borderRadius="10px"
            />
            <HStack justifyContent={"space-between"} spacing='50px'>
              <PlatformIcons platforms={game?.parent_platforms} />
              <CriticScore score={game?.metacritic} />
            </HStack>
            <Heading>{game.name}</Heading>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(game?.description),
              }}
            ></div>
          </VStack>
        )}
      </>
    );
};

export default SingleGame;

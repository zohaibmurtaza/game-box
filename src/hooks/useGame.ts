import useData from "./useData";
import { Game } from "./useGames";

const useGame = (
 id: string | undefined
) =>
  useData<Game | null>(
    `/games/${id}`,
    {},
    []
  );

export default useGame;

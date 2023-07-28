import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genre: Genre;
  rating_top: number;
  description: string;
}

const useGames = (
 gameQuery:GameQuery
) =>
  useData<Game | null>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: gameQuery.page
      },
    },
    [gameQuery]
  );

export default useGames;

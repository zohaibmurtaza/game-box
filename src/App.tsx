import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import Pagination from "./components/Pagination";
import GameHeading from "./components/GameHeading";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  useEffect(() => {
    setGameQuery({ ...gameQuery, page: 1 });
  }, []);
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
        paddingX="10px"
      >
        <GridItem area="nav" marginBottom="20px">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              onSelectGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GameHeading gameQuery={gameQuery} />
                  <HStack gap={5} marginBottom="10px">
                    <PlatformSelector
                      selectedPlatform={gameQuery.platform}
                      onSelectedPlatform={(platform: Platform) =>
                        setGameQuery({ ...gameQuery, platform })
                      }
                    />
                    <SortSelector
                      selectedOrder={gameQuery.sortOrder}
                      onSelectOrder={(sortOrder) =>
                        setGameQuery({ ...gameQuery, sortOrder })
                      }
                    />
                  </HStack>
                  <GameGrid gameQuery={gameQuery} />
                  <Pagination
                    onPageSelect={(n: number) =>
                      setGameQuery({ ...gameQuery, page: n })
                    }
                    currentPage={gameQuery.page}
                  />
                </>
              }
            />
            <Route path="/game/:gameId" element={<Game />} />
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

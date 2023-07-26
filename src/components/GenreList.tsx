import { List, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreSkeleton from "./GenreSkeleton";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenre();
  const dummyGenre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [selected, setSelected] = useState<number | null>(null);
  if (isLoading) {
    return (
      <List>
        {dummyGenre.map((index) => (
          <GenreSkeleton key={index} />
        ))}
      </List>
    );
  }

  const onGenreSelected = (genre: Genre) => {
    onSelectGenre(genre);
    setSelected(genre.id);
  };
  return (
    <>
    <Text fontSize='20px' fontWeight={700} marginBottom='20px'>Genres</Text>
    <List>
      {data.map((g) => (
        <GenreItem
          genre={g}
          key={g.id}
          onGenreSelected={onGenreSelected}
          isSelected={g.id == selected}
        />
      ))}
    </List>
    </>
  );
};

export default GenreList;

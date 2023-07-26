import { Image, ListItem, HStack, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { getCroppedUrl } from "../services/image-url";

interface Props {
  genre: Genre;
  onGenreSelected: (genre: Genre) => void;
  isSelected: boolean;
}

const GenreItem = ({ genre, onGenreSelected, isSelected }: Props) => {
  return (
    <ListItem key={genre.id} paddingY="5px">
      <HStack key={genre.id}>
        <Image
          objectFit='cover'
          boxSize="32px"
          borderRadius={8}
          src={getCroppedUrl(genre.image_background)}
          key={genre.id}
        />
        <Button
          whiteSpace="normal"
          textAlign="left"
          fontSize="lg"
          variant="link"
          fontWeight={isSelected ? "bold" : "normal"}
          onClick={() => onGenreSelected(genre)}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
